const express = require('express')
const app = express()
const cors = require('cors')
const domainCase = require('./domain-case')
const port = process.env.PORT || 1408

app.use(express.static('static'))
app.set('view engine', 'ejs')
app.use(cors())

app.get('/', (req, res) => {
  const host = req.get('host')

  res.render('home', {
    domain: domainCase[host] || host,
  })
})

app.listen(port, () => {
  console.log(`Sell Domains app listening on port ${port}`)
})