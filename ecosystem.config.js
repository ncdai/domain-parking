module.exports = {
  apps: [
    {
      name: 'sale-domain',
      script: 'yarn start',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
