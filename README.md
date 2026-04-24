# krogare.se

rebranding 2026

## Image assets

Images are centralized under `/public/images`.

### Active image

- `/public/images/hero/hero-bg.svg`

### Naming convention

Use kebab-case for image file names (example: `hero-bg.svg`).

## Preview deployment (Vercel)

A `vercel.json` file is included to force static hosting and rewrite extension-less routes to `index.html`.
This prevents `404: NOT_FOUND` on preview URLs when opening nested paths directly.
