# sell-domains

## Overview

The application allows you to create a temporary website: "**Domain name is for sale**" or "**Website will be launched soon**" with a simple and modern interface. The website will display your domain name, and the notification text.

- The application checks whether the domain name pointing to the Website belongs to you or not. This helps prevent others from pointing their domain to your server IP to use your website for free. *Checked domains are kept on **Redis** for 30 days to improve check speed.*

- The application automatically creates a cover photo when you share a domain name on social networks.

- The application is especially useful when you want to apply your website to multiple domains. Instead of having to deploy a website for each domain name, now you only need to deploy the website once on a server, and point other domains to the Server IP, this helps save a lot of time and effort.

## Get Started

### Configure Redis

Create `redis_conf/.redis.conf` file with the following content:

```bash
requirepass your_redis_password
```

### Configure ENV

Create `.env` file with the following content:

```bash
PORT=1408
OG_SECRET=your_og_secret
OG_URL=https://chanhdai.com/api/domain/og
REDIS_URL=redis://:<your_redis_password>@localhost:6379
CLOUDFLARE_API_TOKEN=your_api_token
MIXPANEL_TOKEN=your_token
```

- `OG_SECRET` `OG_URL`:
  - You can create your own **OG Image** generation service using Next.js according to the following instructions https://vercel.com/docs/functions/og-image-generation/og-image-examples#encrypting-parameters
  - I will open source **OG Image** generation service in the near future.

- `CLOUDFLARE_API_TOKEN`:
  - You can create `CLOUDFLARE_API_TOKEN` with `Zone.Access: Apps and Policies` permission according to the following instructions https://developers.cloudflare.com/fundamentals/api/get-started/create-token

### Configure Domain Display

- `domain-not-sale.js`: List domain names that are not for sale.
- `domain-case.js`: Specify how domain names are displayed.

### Install Packages

```bash
yarn install
```

### Start Development

**Start Redis**

```bash
docker compose up -d
```

**Start App**

```bash
yarn tailwind:watch
yarn dev
```

Access http://localhost:1408 to see amazing results.

### Deploy to Production

**Prerequisites**

Ubuntu 20.04 server [https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04]

- `firewalls` [https://docs.digitalocean.com/products/networking/firewalls/how-to/manage-droplets/]
- `nginx` [https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04]
- `docker` [https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04]
- `docker-compose` [https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04]
- `node` [https://github.com/nvm-sh/nvm#install--update-script]
- `yarn` [https://classic.yarnpkg.com/lang/en/docs/install]
  - `npm install -g yarn`
- `pm2` [https://pm2.io/docs/runtime/guide/installation/]
  - `yarn global add pm2`

**Start Redis**

```bash
mkdir redisinsight_data
chmod 777 redisinsight_data

docker compose up -d
```

- redis: `localhost:6379`
- redisinsight: `localhost:5540`

**Start App**

```bash
yarn pm2:start
```

**Configure Nginx**

Update the `nginx.conf` file content to match your domain name. Then run the following command:

```bash
sudo ln -s /root/sell-domains/nginx.conf /etc/nginx/sites-enabled/sell-domains

nginx -t
systemctl restart nginx
```

**Configure Domains**

1. Add your domains to Cloudflare [https://developers.cloudflare.com/fundamentals/setup/manage-domains/add-site/]
2. Point domain names to your Server IP [https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/]
3. Access your domains to see amazing results.

---

> © 2024 Quaric Co., Ltd.
