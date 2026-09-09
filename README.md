# HomeBillCuts

Static Astro site for **HomeBillCuts** — bill-first US home energy efficiency guides (practical checklists and product shortlists). Honest tone; no guaranteed dollar savings.

- **Site URL (configured):** `https://homebillcuts.com`
- **Stack:** Astro (static), Markdown content collections, plain CSS
- **Host target:** Cloudflare Pages

## Requirements

- Node.js **22.12+** (Astro 7)

## Setup

```bash
cd homebillcuts
npm install
npm run dev
```

Open the local URL printed by Astro (usually `http://localhost:4321`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build to dist/ |
| `npm run preview` | Preview the production build locally |

## Project layout

```
src/
  content/blog/          # Markdown posts (content collection)
  content.config.ts      # Collection schema
  pages/                 # Routes (Home, About, Contact, etc.)
  layouts/               # Base + blog layouts
  components/            # Shared UI
  styles/global.css      # Site CSS
public/                  # robots.txt, favicon
astro.config.mjs         # site URL, MDX, sitemap
```

## Adding a blog post

1. Create a new file in `src/content/blog/`, e.g. `my-new-guide.md`.
2. Add frontmatter:

```md
---
title: "Your title"
description: "One- or two-sentence summary for SEO and cards."
pubDate: 2026-09-20
---

Your Markdown content...
```

3. The URL becomes `/blog/my-new-guide/` (from the filename / entry id).
4. Near product recommendations, include a short FTC disclosure and use affiliate placeholders like `{{AFFILIATE:product-slug}}` until real tracked URLs exist.
5. Link related guides with normal Markdown links (`[text](/blog/other-post/)`).
6. Run `npm run dev` to preview; `npm run build` before deploying.

Optional frontmatter: `updatedDate`, `draft: true` (drafts are excluded from listings/build paths).

## Affiliate placeholders

Do **not** invent Amazon tracking IDs in the repo. Keep tokens such as:

```text
{{AFFILIATE:emporia-vue-energy-monitor}}
```

Replace them with real affiliate URLs only after program enrollment. Site-wide policy lives at `/disclosure/`.

## Deploy to Cloudflare Pages

### Via Cloudflare dashboard

1. Push this repo to GitHub/GitLab.
2. In Cloudflare Pages, Create project, connect the repo.
3. Build settings:
   - Framework preset: Astro (or None)
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `22` (set `NODE_VERSION=22` in environment variables if needed)
4. Save and deploy.

### Via Wrangler (optional)

```bash
npm run build
npmx wrangler pages deploy dist --project-name=homebillcuts
```

## Custom domain (homebillcuts.com)

1. In Cloudflare Pages, open your project, Custom domains, add `homebillcuts.com` and `www`.
2. If the domain is on Cloudflare DNS, follow the dashboard prompts.
3. If DNS is elsewhere, add the records Cloudflare shows (typically CNAME to `*.pages.dev`).
4. Wait for HTTPS to provision.
5. Confirm `astro.config.mjs` site URL matches production (already set to https://homebillcuts.com).
6. Re-deploy so sitemap/RSS absolute URLs stay correct.

## RSS, sitemap, robots

Generated/served automatically:

- RSS: `/rss.xml`
- Sitemap: `/sitemap-index.xml` (via `@astrojs/sitemap`)
- Robots: `/robots.txt`

## Out of scope

No backend, no fake testimonials, no invented analytics/affiliate IDs, no WordPress.

## License / content

Site code is yours to modify. Replace placeholder contact email and About bio before launch.
