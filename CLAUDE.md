# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm lint       # ESLint check
pnpm start      # run production server
```

No test suite is configured. Use `pnpm build` to catch TypeScript and lint errors before shipping.

## Git commits

Never add **Co-authored-by** (or `Co-Authored-By`) trailers to commit messages. Omit machine or assistant attribution lines entirely; commits should reflect the human author only.

## Architecture

Next.js 16 App Router site for Heritage Jute Fibers — a B2B jute export company based in Bangladesh serving 31 countries. The site is a legitimacy/trust-building site, not an e-commerce store.

**Pages** (`src/app/`): Four routes — `/` (home), `/products` (catalog), `/products/[slug]` (detail), `/about`, `/contact`. Each page is a server component that imports section components and passes business content as props. Metadata is exported from each page file.

**Components** (`src/components/`): Named by shadcn block IDs (e.g. `hero249`, `navbar8`, `feature85`). They are page-section-sized, not atomic. shadcn primitives live in `src/components/ui/`. Premium shadcnblocks components live in `src/components/shadcnblocks/`. Client-only components are marked `"use client"`.

**Data** (`src/lib/products.ts`): The entire product catalog is a static TypeScript data structure — no database. Product slugs drive the dynamic route.

**Forms**: Contact form uses a Next.js server action (`src/app/contact/actions.ts`) validated with Zod and submitted to Web3Forms API.

**Utilities**:
- `src/lib/utils.ts` — `cn()` merges Tailwind classes (clsx + tailwind-merge)
- `src/lib/site.ts` — `siteUrl()` reads `NEXT_PUBLIC_SITE_URL` (defaults to heritagejute.com)

**Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`. CSS variables drive the theme. Always use `cn()` when merging conditional classes.

**React Compiler** is enabled in `next.config.ts` — avoid manual `useMemo`/`useCallback` unless profiling shows a need.

**SEO files**: `robots.ts`, `sitemap.ts`, `manifest.ts` in `src/app/` are Next.js route handlers, not static files.

## Component Conventions

- shadcn/ui components: install via `pnpm dlx shadcn@latest add <component>`
- shadcnblocks blocks: install via the MCP tool or `pnpm dlx shadcnblocks@latest add <block>`
- New section components follow the numbered naming pattern (e.g. `gallery7.tsx`) matching the shadcn block registry ID
- Business content (copy, CTAs, lists) is passed as props from the page, not hardcoded in section components
