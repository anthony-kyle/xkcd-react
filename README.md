# xkcd-react

A small [xkcd](https://xkcd.com) comic browser built with [Next.js](https://nextjs.org/) (App Router), React 19, and Node.js LTS.

## Requirements

- Node.js 20.9+ (see `.nvmrc` for the version used in development)

## Setup

```sh
git clone https://github.com/anthony-kyle/xkcd-react.git
cd xkcd-react
npm install
```

## Scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Next.js dev server (http://localhost:3000)       |
| `npm run build`| Production build                                 |
| `npm start`    | Run production server after `build`              |
| `npm test`     | Jest + React Testing Library                     |
| `npm run lint` | ESLint (`eslint-config-next`)                    |

The app is served under the **`/xkcd-react`** base path (see `next.config.mjs`). In development open:

**http://localhost:3000/xkcd-react**

Comic JSON is proxied through a Route Handler at `/xkcd-react/api/[id]` so the browser does not call xkcd.com directly.

## Deployment

Host with a **Node.js** runtime so Route Handlers run (`next start` or a platform that supports Next.js server features). Configure your reverse proxy so the site is mounted at `/xkcd-react` if you use that path in production, or change `basePath` in `next.config.mjs` and update `lib/xkcd.js` API paths to match.

## Loader image

The loading spinner expects `public/images/39.gif` (served as `/xkcd-react/images/39.gif`). Add that asset under `public/images/` if you want the animated loader.
