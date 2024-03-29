require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

const domainCase = require('./domain-case')
const domainNotSale = require('./domain-not-sale')
const { getOGImageURL } = require('./og')
// const domainSale = require('./domain-sale')

const port = process.env.PORT || 1408

const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1)

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.use(cors())

app.get('/', (req, res) => {
  const host = req.get('host')
  const domain = domainCase[host] || capitalizeFirstLetter(host)
  const ogImageURL = getOGImageURL(domain)

  res.render('home', {
    domain,
    ogImageURL,
    isForSale: !domainNotSale.includes(host)
    // isForSale: domainSale.includes(host),
  })
})

app.listen(port, () => {
  console.log(`Sell Domains app listening on port ${port}`)
})
