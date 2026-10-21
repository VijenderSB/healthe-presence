# Transess Website

Marketing website for **Transess** — medical digital marketing agency.

Built with Vite + React + TypeScript, Tailwind CSS, shadcn/ui, and Supabase (contact form backend).

## Local development

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Build

```sh
npm run build
```

Output is generated in `dist/`.

## Deploy

The site is hosted on Hostinger Cloud (LiteSpeed). Upload the contents of `dist/`
to `public_html`. See `deploy/` for the packaging helper; SPA routing is provided
by `public/.htaccess` (copied into the build automatically).

## Environment

Set these in `.env`:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_SUPABASE_PROJECT_ID=...
```

These are Supabase *publishable* keys — data access is protected by Row Level Security.

## Supabase

The contact form posts to the `submit-contact` edge function in `supabase/functions/`.
Redeploy it after changes:

```sh
supabase functions deploy submit-contact
```
