const { createHmac } = require('node:crypto')
const packageJSON = require('./package.json')

function getToken (domain = '') {
  const hmac = createHmac('sha256', process.env.OG_SECRET)
  hmac.update(JSON.stringify({ domain }))
  const token = hmac.digest('hex')
  return token
}

function getOGImageURL (domain = '') {
  const token = getToken(domain)
  return `${process.env.OG_URL}?domain=${domain}&theme=light&token=${token}&v=${packageJSON.version}`
}

module.exports = {
  getOGImageURL
}
