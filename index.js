const express = require('express')
const app = express()
const cors = require('cors')

const domainCase = require('./domain-case')
const domainNotSale = require('./domain-not-sale')
// const domainSale = require('./domain-sale')

const port = process.env.PORT || 1408

const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1)

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.use(cors())

app.get('/', (req, res) => {
  const host = req.get('host')

  res.render('home', {
    domain: domainCase[host] || capitalizeFirstLetter(host),
    isForSale: !domainNotSale.includes(host),
    // isForSale: domainSale.includes(host),
  })
})

app.listen(port, () => {
  console.log(`Sell Domains app listening on port ${port}`)
})
