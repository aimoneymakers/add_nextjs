# Addicted 2 PPC — Pro

A from-scratch Next.js rebuild of addicted2ppc.com: same pages, same copy, same 77 blog posts and images, redesigned as a fast, "pro" agency site. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Supabase.

## What's inside

- **Pages**: Home, About Us, Services, Contact Us, Free PPC Proposal, PPC Blog (index + 77 individual posts), all statically generated at build time.
- **Content**: pulled from your WordPress export (`WordPress_2026-07-02.xml`) and cleaned — blog posts keep their original text, images, dates and categories. Images are served directly from your existing WordPress media library (`addicted2ppc.com/wp-content/uploads/...`) via `next/image`, so nothing needed re-uploading.
- **Forms**: the Contact and Free Proposal forms post to `/api/contact` and `/api/proposal`, which write to Supabase. If Supabase isn't connected yet, the forms show a friendly error instead of crashing.
- **Design**: dark navy + signal blue + "bid orange" accent, Space Grotesk/Inter/IBM Plex Mono type, a live-style ticker strip and animated stat counters — a premium look while keeping the same structure and message as the original.

## 1. Run it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## 2. Connect Supabase (for the forms)

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase dashboard, go to **SQL Editor → New query**, paste the contents of `supabase/schema.sql`, and run it. This creates two tables — `contact_messages` and `proposal_requests` — with row-level security that only allows inserts (not reads) from the public key.
3. Go to **Settings → API** and copy the **Project URL** and **anon public key**.
4. Copy `.env.example` to `.env.local` and fill them in:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```
5. Restart `npm run dev`. Submissions will now appear in **Table Editor** in Supabase.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Next.js pro rebuild"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## 4. Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected).
3. Add the two environment variables from step 2 (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`) under **Settings → Environment Variables**.
4. Deploy. Add your domain (`addicted2ppc.com`) under **Settings → Domains** when you're ready to switch DNS over.

## Notes on performance / Lighthouse

- All marketing pages and all 77 blog posts are pre-rendered to static HTML at build time — no database calls on page load.
- Fonts are self-hosted automatically by `next/font` (no external font requests, no layout shift).
- Images use `next/image` (automatic AVIF/WebP, lazy loading, correct sizing).
- JS is minimal: only the header menu, forms and stat counters are client components; everything else ships as static HTML.
- Run a Lighthouse pass in Chrome DevTools (or `npx unlighthouse --site your-vercel-url`) after your first deploy — real-world scores depend a bit on hosting region and the weight of the hero images, both of which you can tune in `app/page.tsx` and `next.config.js`.

## Editing content

- Site-wide copy (nav, stats, taglines): `lib/data/site.ts`
- Blog posts: `lib/data/posts.json` (regenerated from your WordPress export — edit directly, or re-export from WordPress and re-run the extraction script if you add new posts there)
- Page copy: directly inside each `app/**/page.tsx` file

## Project structure

```
app/                  routes (App Router)
  page.tsx            home
  about-us/           about page
  services/           services page
  contact-us/         contact page
  free-ppc-proposal/  proposal page
  ppc-blog/           blog index + [slug] post pages
  api/                contact + proposal form handlers
components/           Header, Footer, forms, blog card, stat counter
lib/                  Supabase client, blog data helpers, site content
supabase/schema.sql   database schema to run in Supabase
```
