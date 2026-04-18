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

In development open **http://localhost:3000/**

Comic JSON is proxied through a Route Handler at `/api/[id]` so the browser does not call xkcd.com directly.

## Deployment

Host with a **Node.js** runtime so Route Handlers run (`next start` or a platform that supports Next.js server features).
