# Movement by Design

Premium Next.js website for **Movement by Design** — exercise science-based personal training,
rehabilitation-informed coaching, special populations exercise coaching and online health
coaching in Salou, Cambrils and Tarragona (Costa Daurada, Spain).

Static-exported, Tailwind-styled, GitHub Pages-ready.

## Stack

- Next.js 14 (App Router) with `output: 'export'`
- TypeScript
- Tailwind CSS
- Inter + Sora via `next/font`
- JSON-LD: HealthAndBeautyBusiness, Person, Service, FAQPage, BreadcrumbList, Article

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
```

The static site is emitted to `./out`. Push the contents of `./out` to your GitHub Pages
branch (or use a workflow). `public/.nojekyll` is included so GitHub Pages won't strip
underscored files.

## Deployment

This repo ships with [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Push to
`main` and GitHub Actions will build the static site and publish it via GitHub Pages.

**Repo:** https://github.com/MicahWalkerDesign/Movementbydesign
**Live URL (project pages):** https://micahwalkerdesign.github.io/Movementbydesign/

### One-time GitHub setup
1. **Settings → Pages →** set **Source: GitHub Actions**.
2. Push to `main`. The workflow does the rest.

### Switching to a custom domain
1. Add `public/CNAME` containing the domain (e.g. `movementbydesign.es`).
2. Set `BASE_PATH=''` (or remove it) in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
3. Update `SITE.url` in [`lib/site.ts`](lib/site.ts) to the new domain.
4. Configure DNS (CNAME / A records) per the GitHub Pages docs.

## Site map

- `/` — homepage
- `/personal-training-salou/` — local SEO service page
- `/online-coaching/` — online coaching
- `/functional-training/` — functional training
- `/injury-prevention/` — rehabilitation-informed training
- `/nutrition-habits/` — nutrition education & habit coaching
- `/special-populations-exercise/` — pregnancy, cancer, diabetes, neurological, older adults, etc.
- `/about/`, `/contact/`, `/blog/` and 5 blog posts

## Editing content

- Site-wide config: [`lib/site.ts`](lib/site.ts)
- Blog posts: [`lib/posts.ts`](lib/posts.ts) — add new entries to `POSTS`
- SEO helpers: [`lib/seo.ts`](lib/seo.ts)

## Compliance

The site uses careful language: "rehabilitation-informed training", "exercise science-based
coaching", "movement education", "health coaching", "nutrition education" and
"special populations exercise coaching". A medical-scope disclaimer appears on every page
that touches health context, plus the global footer.
