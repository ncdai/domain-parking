const { createHmac } = require('node:crypto')

function getToken (domain) {
  const hmac = createHmac('sha256', process.env.OG_SECRET)
  hmac.update(JSON.stringify({ domain }))
  const token = hmac.digest('hex')
  return token
}

function getOGImageURL (domain) {
  const token = getToken(domain)
  return `${process.env.OG_URL}?domain=${domain}&token=${token}`
}

module.exports = {
  getOGImageURL
}
