const packageJSON = require('./package.json')

function getOGImageURL (domain = '') {
  return `${process.env.OG_URL}?domain=${domain}&v=${packageJSON.version}`
}

module.exports = {
  getOGImageURL
}
