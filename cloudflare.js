const axios = require('axios').default

const checkDomainExists = async (domain) => {
  try {
    if (domain === 'localhost') return true

    const { data } = await axios.get(`https://api.cloudflare.com/client/v4/zones?name=${domain}&status=active`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`
      }
    })

    if (!data.success) return false

    return data.result.findIndex((zone) => zone.name === domain) !== -1
  } catch (error) {
    console.error(error)
    return false
  }
}

module.exports = {
  checkDomainExists
}
