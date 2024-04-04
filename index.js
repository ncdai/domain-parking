require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const Redis = require('ioredis')

let redisClient

if (process.env.REDIS_URL) {
  redisClient = new Redis(process.env.REDIS_URL)
}

const domainCase = require('./domain-case')
const domainNotSale = require('./domain-not-sale')

const { getOGImageURL } = require('./og')
const { checkDomainExists } = require('./cloudflare')

const port = process.env.PORT || 1408

const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1)

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.use(cors())

app.use(async (req, res, next) => {
  if (!redisClient) {
    next()
    return
  }

  const domain = req.hostname
  const cacheKey = `cloudflare:${domain}`

  try {
    const cachedData = await redisClient.get(cacheKey)

    if (cachedData) {
      if (cachedData !== '1') {
        res.status(404)
        res.send('Domain is not exists')
        return
      }

      next()
      return
    }

    const isExists = await checkDomainExists(domain)
    await redisClient.set(cacheKey, isExists ? '1' : '0', 'EX', 30 * 24 * 60 * 60) // Expire in 30 days

    if (!isExists) {
      res.status(404)
      res.send('Domain is not exists')
      return
    }

    next()
  } catch (error) {
    console.error(error)
    res.status(500)
    res.send('Internal server error')
  }
})

app.get('/', (req, res) => {
  const host = req.hostname
  const domain = domainCase[host] || capitalizeFirstLetter(host)
  const isForSale = !domainNotSale.includes(host)
  const ogImageURL = getOGImageURL(domain, isForSale)

  res.render('home', {
    domain,
    ogImageURL,
    isForSale
  })
})

app.listen(port, () => {
  console.log(`Sell Domains app listening on port ${port}`)
})
