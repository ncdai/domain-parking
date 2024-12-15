require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const { getOGImageURL } = require('./og')

const DOMAIN_LIST = require('./domain-list')
const DOMAIN_CASE = require('./domain-case')
const DOMAIN_LOGO = require('./domain-logo')

const packageJSON = require('./package.json')

const port = process.env.PORT || 1408

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.use(cors())

const checkDomain = async (req, res, next) => {
  const isValidDomain = DOMAIN_LIST.includes(req.hostname)

  if (isValidDomain) {
    next()
    return
  }

  res.status(404)
  res.send('Not found')
}

app.get('/', checkDomain, (req, res) => {
  const host = req.hostname
  const domain = DOMAIN_CASE[host] || host
  const logoURL = DOMAIN_LOGO[host] || 'logo/default.png'
  const canonicalURL = req.protocol + '://' + req.get('host') + req.originalUrl
  const ogImageURL = getOGImageURL(domain)

  res.render('home', {
    domain,
    logoURL,
    canonicalURL,
    ogImageURL,
    version: packageJSON.version
  })
})

app.listen(port, () => {
  console.log(`Sell Domains app listening on port ${port}`)
})
