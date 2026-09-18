# THE FINALS Hacks — thefinalshacks.org

SEO landing site for **THE FINALS** hacks, built from the [SEO-1.1](https://github.com/Stellarhamza/SEO-1.1) template.

- **Domain:** https://thefinalshacks.org
- **Primary keyword:** thefinals hacks
- **Checkout:** https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fthefinals

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321/

Brand Studio (local only): http://localhost:4321/brand-studio/

## Build

```bash
npm run build
```

## Brand config

Edit `src/data/brand.ts` (single source of truth), then:

```bash
npm run sync:brand
```

## Deploy

Cloudflare Pages project name: `thefinalshacks`

```bash
npm run pages:deploy
```
