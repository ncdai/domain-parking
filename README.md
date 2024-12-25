# Domain Parking

## Overview

The application allows you to create a temporary website: "**The domain name is for sale**" or "**The website will be launched soon**" with a simple and modern interface. The website will display your domain name, and the notification text.

- The application automatically creates a cover photo when you share a domain name on social networks.

- The application is especially useful when you want to apply your website to multiple domains. Instead of having to deploy a website for each domain name, now you only need to deploy the website once on a server, and point other domains to the Server IP, this helps save a lot of time and effort.

- Demo: https://design.edu.vn

## Get Started

### Configure ENV

Create `.env` file with the following content:

```bash
PORT=1408
OG_SECRET=your_og_secret
OG_URL=https://chanhdai.com/api/domain/og
```

- `OG_SECRET` `OG_URL`:
  - You can create your own **OG Image** generation service using Next.js according to the following instructions https://vercel.com/docs/functions/og-image-generation/og-image-examples#encrypting-parameters
  - I will open source **OG Image** generation service in the near future.

### Configure Domain Display

- `domain-list.js`: List the domain names that are for sale.
- `domain-case.js`: Specify how domain names are displayed.
- `domain-logo.js`: Specify the logo to be displayed for each domain.

### Install Packages

```bash
yarn install
```

### Start Development

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
- `node` [https://github.com/nvm-sh/nvm#install--update-script]
- `yarn` [https://classic.yarnpkg.com/lang/en/docs/install]
  - `npm install -g yarn`
- `pm2` [https://pm2.io/docs/runtime/guide/installation/]
  - `yarn global add pm2`

**Start App**

```bash
yarn install
yarn pm2:start
```

**Configure Nginx**

Update the `nginx.conf` file content to match your domain name. Then run the following command:

```bash
sudo ln -s /root/domain-parking/nginx.conf /etc/nginx/sites-enabled/domain-parking

nginx -t
systemctl restart nginx
```

**Configure Domains**

1. Add your domains to Cloudflare [https://developers.cloudflare.com/fundamentals/setup/manage-domains/add-site/]
2. Point domain names to your Server IP [https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/]
3. Access your domains to see amazing results.

---

> © 2024 Quaric Co., Ltd.
