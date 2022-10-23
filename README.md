<a href="https://dyo.at">
  <img alt="Dyo – an open-source link shortener SaaS with built-in analytics + free custom domains." src="/public/static/thumbnail.png">
  <h1 align="center">Dyo</h1>
</a>

<p align="center">
  An open-source link shortener SaaS with built-in analytics + free custom domains.
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#implementation"><strong>Implementation</strong></a> ·
  <a href="#contributing"><strong>Contributing</strong></a>
</p>
<br/>

## Introduction

Dyo is an open-source link shortener with built-in analytics + free custom domains. Built with [Vercel Edge Functions](http://vercel.com/edge), [Upstash Redis](https://docs.upstash.com/redis), and [Planetscale MySQL](https://planetscale.com/).

Here are some of the features that Dyo provides out-of-the-box:

### Built-in Analytics

Dyo provides a powerful analytics dashboard for your links, including geolocation, device, and browser information.

![Analytics Dashboard](/public/static/landing/analytics.png)

### Custom domains

You can easily configure custom domains on Dyo – just add an A/CNAME record to your DNS provider and you're good to go. This is built on the [Vercel Domains API](https://domains-api.vercel.app/).

![Custom Domains](/public/static/landing/domains.png)

### QR Code Generator

You can easily generate and customize QR codes for your links, which can be used for flyers, posters, powerpoint presentations, etc.

![QR Code](/public/static/landing/qr.png)

### OG Image Proxy

Add a custom OG image in front of your target URL. Bots like Twitter/Facebook will be served this image, while users will be redirected to your target URL.

![OG Image Proxy](/public/static/landing/og-image-proxy.gif)

## Deploy Your Own

You can deploy your own hosted version of Dyo for greater privacy & control. Just click the link below to deploy a ready-to-go version of Dyo to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://dyo.at/deploy)

## Tech Stack

- [Next.js](https://nextjs.org/) – framework
- [Typescript](https://www.typescriptlang.org/) – language
- [Tailwind](https://tailwindcss.com/) – CSS
- [Upstash](https://upstash.com/) – redis
- [Planetscale](https://planetscale.com/) – database
- [NextAuth.js](https://next-auth.js.org/) – auth
- [Vercel](https://vercel.com/) – hosting
- [Stripe](https://stripe.com/) – payments

## Implementation

Dyo is built as a standard Next.js application with [Middleware](https://nextjs.org/docs/advanced-features/middleware) to handle multi-tenancy, inspired by [the Vercel Platforms Starter Kit](https://github.com/vercel/platforms).

[Redis](https://redis.io/) is used as the caching layer for all short links. Redis also has the Sorted Set data type, which is perfect for storing & retrieving time-series analytics data. Here's the full schema:

- `{domain}:{key}` – string containing a JSON object with the target URL and password (optional). Also has an optional TTL.
- `{domain}:clicks:{key}` – sorted set of all clicks for a given link (e.g. `dyo.at:clicks:github`)
- `{domain}:root:clicks` – sorted set of all root link clicks for a given domain (e.g. `dyo.at:root:clicks`)

[MySQL](https://www.mysql.com/) is used as the database for storing user data, project data, and link metadata. You can refer to the Prisma schema [here](/prisma/schema.prisma).

## Contributing

We love our contributors! Here's how you can contribute:

- [Open an issue](https://github.com/dyonc/dyo/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/dyonc/dyo/pull) to add new features/make quality-of-life improvements/fix bugs.

<a href="https://github.com/dyonc/dyo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=steven-tey/dub" />
</a>

## Author

- Steven Tey ([@steventey](https://twitter.com/steventey))

## License

Inspired by [Plausible](https://plausible.io/), Dyo is open-source under the GNU Affero General Public License Version 3 (AGPLv3) or any later version. You can [find it here](https://github.com/dyonc/dyo/blob/main/LICENSE.md).
