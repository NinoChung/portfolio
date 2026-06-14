# Niño Chung · Portfolio

Personal portfolio for Niño Chung, Customer Success Manager and landing-page designer.
Live site: https://ninochung.is-pinoy.dev/

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion

## Develop

```bash
npm install
npm run dev      # http://localhost:5174
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. The custom domain is configured via `public/CNAME`.
