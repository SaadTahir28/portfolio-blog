# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal site/blog for Saad Tahir (saadtahir.com), forked from [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog). Next.js 12 **pages router**, JavaScript (no TypeScript), Tailwind 3, content stored as Markdown/MDX files on disk. Deployed on Vercel. Node 20.x.

## Working agreement

These rules override default behavior and apply to every task in this repo.

**1. Plan before coding.** Present a plan and stop. Write no code until the user replies with `APPROVE`. Anything other than `APPROVE` — a question, a correction, silence on a point — means keep planning, not start coding.

**2. The user runs the app; Claude does not.** Do not run `npm start`, `npm run dev`, `npm run build`, or `npm run serve`, and do not start any server or long-running process. The user tests on their own server. `npm run lint` is fine — it is a fast static check that starts nothing.

**3. Always finish with test steps.** After the code is written, hand over numbered, concrete steps: what to run, which URL to open, what to click, and what correct looks like versus what failure looks like. Include anything that needs a hard refresh or a fresh build to show up.

**4. The user reports results; Claude records them.** When the user comes back with test results, update this file with what the testing established — a behavior that only shows up in a production build, a browser quirk, a step that turned out to be required. Add it to the relevant section (or to **Verified behavior** below) so the next session does not rediscover it.

### Verified behavior

Findings confirmed by the user's own testing. Nothing here is assumed — each line was observed on a real run.

_(none recorded yet)_

## Commands

```bash
npm install                 # deps; also runs `husky install`
npm run dev                 # plain next dev on :3000
npm start                   # next dev + file watcher on ./data with websocket client reload
npm run build               # next build, then node ./scripts/generate-sitemap
npm run serve               # serve the production build
npm run lint                # next lint --fix over pages/components/lib/layouts/scripts
npm run analyze             # bundle analyzer (ANALYZE=true next build)
node ./scripts/compose.js   # interactive prompt to scaffold a new blog post with front matter
```

There is **no test suite** in this repo — nothing to run for tests. `npm run lint` and `npm run build` are the only verification gates, and per the working agreement above the build is the user's to run, not Claude's.

Use `npm start` (not `npm run dev`) when editing files under `data/` — it sets `SOCKET=true` so `components/ClientReload.js` triggers a router refresh on content changes. `npm run dev` will not pick up MDX edits without a manual reload.

## Architecture

### Content is data, not code

Everything user-facing lives in `data/` and is read at build time:

- `data/blog/*.md|.mdx` — blog posts. Front matter drives everything: `title`, `date`, `tags`, `draft`, `summary`, `images`, `layout`, `canonicalUrl`, `authors`.
- `data/authors/default.md` — required; additional authors are extra files here, referenced by the `authors` front matter array.
- `data/projectsData.js` — the projects page and home "Recent Projects" section; array order *is* the display order.
- `data/tools.js`, `data/headerNavLinks.js`, `data/siteMetadata.js` — site config, nav, tools list.
- `data/references-data.bib` — bibliography for `rehype-citation`.

### Build-time MDX pipeline (`lib/mdx.js`)

`getFiles` / `getAllFilesFrontMatter` / `getFileBySlug` are the only content accessors; pages call them from `getStaticProps`. `getFileBySlug` runs `mdx-bundler` with the remark/rehype chain configured in one place: GFM, footnotes, math (KaTeX), custom frontmatter extraction, code titles, TOC extraction, and `remarkImgToJsx` (converts markdown images to `next/image`). Custom plugins live in `lib/remark-*.js`.

Two Windows-specific details are load-bearing here: the `ESBUILD_BINARY_PATH` branch for `esbuild.exe`, and `.replace(/\\/g, '/')` when deriving slugs from file paths. Don't remove them.

`getAllFilesFrontMatter` silently drops `draft: true` posts, so drafts never appear in listings, tags, RSS, or the sitemap — but `pages/blog/[...slug].js` still generates the route and renders an "Under Construction" page.

### Layout selection

Post front matter's `layout` field names a file in `layouts/` (`PostLayout`, `PostSimple`, `ListLayout`, `AuthorLayout`); `components/MDXComponents.js` resolves it at render time via `MDXLayoutRenderer`. Adding a layout means adding a file there — `scripts/compose.js` auto-discovers any `layouts/*Post*.js` for its prompt.

### Generated files written during the build

Several artifacts are produced as **side effects of `getStaticProps`**, not by a separate step:

- `public/feed.xml` — written by `pages/blog/[...slug].js`
- `public/tags/<tag>/feed.xml` — written by `pages/tags/[tag].js`
- `public/sitemap.xml` — written by `scripts/generate-sitemap.js` after `next build`

These are gitignored (note `.gitignore` excludes `*.xml` globally), so don't commit them or expect them to exist in a fresh clone.

Tags are never declared anywhere — `lib/tags.js` scans all post front matter and `kebabCase`s each tag to build the tag index and routes.

### Playable prototypes

Browser games live as **single self-contained HTML files** in `public/prototypes/` (own canvas/WebGL, inline CSS and JS, no build step, not part of the Next.js bundle). A prototype is surfaced by adding an entry with `play: '/prototypes/<file>.html'` to `data/vibeCodingData.js`, which feeds `pages/vibe-coding.js`; `components/ProjectCard.js` then renders a game-controller icon and makes the card image a new-tab link. Each also needs a screenshot at `public/static/images/projectCards/`.

Prototypes are deliberately kept **out of `data/projectsData.js`** so they stay off `/projects` and the home page's "Recent Projects" block, which both read that array. The two files use the same object shape and the same `ProjectCard`, so an entry can be moved between them unchanged.

A prototype that loads anything from a CDN needs that domain added to the CSP in `next.config.js` — the header applies to `/(.*)`, which includes static files under `public/`.

`ProjectCard` props are all optional and each drives one icon: `href` → GitHub, `deployed` → live link, `youtube` → video, `play` → prototype.

### Preact swap in production

`next.config.js` aliases `react`/`react-dom` to `preact/compat` for the **client production build only**. A dependency that reaches into React internals will work in `npm run dev` and break in `npm run build` — verify new UI libraries against a production build.

Also in `next.config.js`: a strict Content-Security-Policy. Loading any external script, font, or analytics domain requires editing `ContentSecurityPolicy` there, or it will be blocked in production only.

## Conventions

- Imports use the `jsconfig.json` aliases: `@/components/*`, `@/data/*`, `@/layouts/*`, `@/lib/*`, `@/css/*`.
- Prettier: no semicolons, single quotes, 100 columns, 2 spaces, es5 trailing commas. `prettier-plugin-tailwindcss` sorts class lists. ESLint has `no-unused-vars` and `react/prop-types` disabled, and `prettier/prettier` off (Prettier runs separately).
- `lint-staged` is configured in `package.json`, but no `.husky/pre-commit` hook is committed — formatting/linting is not enforced on commit; run `npm run lint` yourself.
- The site is effectively **dark-only** (`siteMetadata.theme: 'dark'`, and components hardcode dark palette classes) even though `next-themes` and a `ThemeSwitch` are wired up. New components should follow the existing dark classes rather than relying on `dark:` variants.
- Tailwind theme extras worth knowing: `primary` = sky, `gray` = neutral, plus `cardBg`, `logoColor`, `darkSecondary`. The shared `.card` class used by `ProjectCard` is defined in `css/prism.css` (not `css/tailwind.css`) — surprising but intentional to keep.
- SVGs imported from JS go through `@svgr/webpack` as components; `components/social-icons/index.js` maps icon names to those SVGs.
- `pages/api/{mailchimp,buttondown,convertkit,klaviyo,revue}.js` are leftover newsletter handlers from the starter with no form component wired to them.
