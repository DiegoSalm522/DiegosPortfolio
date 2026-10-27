# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page personal portfolio for Diego Salmones (React 19 + Vite 7 + Tailwind CSS v4, plain JavaScript/JSX, no router, no TypeScript). Deployed on Vercel at https://diegosalmones-portfolio.vercel.app/.

## Commands

```bash
npm run dev       # Vite dev server on http://localhost:8000 (port set in vite.config.js)
npm run build     # Production build to dist/
npm run preview   # Serve the built dist/
npm run lint      # ESLint (flat config, eslint.config.js)
```

There is no test suite. Verify changes with `npm run lint` and `npm run build`, and visually in the dev server.

## Architecture

- `src/App.jsx` stacks the page sections in order: Navbar → Hero → About → Skills → Experience → Projects → Contact → Footer. Each lives in `src/sections/`; reusable/animated pieces live in `src/components/`.
- **Content is data-driven.** Projects, work experience, skills and social links are arrays in `src/constants/` (`projects.js`, `experience.js`, `skills.js`, `social.js`) and the sections just map over them. Editing portfolio content usually means editing these files and the locale JSONs, not the JSX.
- **i18n (English/Spanish)** uses `i18next` + `react-i18next`, configured in `src/i18n.js` (imported once in `main.jsx`). Translations are bundled from `src/locales/en.json` and `src/locales/es.json`. English is always the default (the browser language is ignored); the language detector only restores the user's previous choice from `localStorage`, and a `languageChanged` listener keeps `<html lang>` and `document.title` in sync. `LanguageToggle` in the navbar switches language. All user-visible text goes through `t()`, and both JSON files must keep the same keys. `constants/` only holds language-independent data (images, URLs, tags, company names) plus a stable key: projects use `slug` → `projects.items.<slug>.{title,description}`, experiences use `key` → `experience.items.<key>.{period,role,bullets}` (`bullets` is read with `returnObjects: true`). Technology names are not translated.
- **Static assets** live in `public/assets/` and are referenced by absolute paths (`/assets/...`). Folders: one per section (`hero/`, `about/`, `experience/`, `projects/<slug>/`), `tech/` for technology logos (skills and project tags), `socials/` for social icons, `icons/` for UI icons, `brand/` for the site logo, `files/` for downloads. Full-size logo source files live in `design/` at the repo root (not deployed). Use lowercase filenames without special characters (e.g. `cpp.webp`, not `c++.webp`). Raster images are WebP, resized to their display size; prefer SVG when available.
- **Project images** follow `public/assets/projects/<slug>/img0.webp … imgN.webp`; `image` is the card thumbnail (usually `img0`, or `cover.webp` when the thumbnail isn't part of the gallery) and `gallery` feeds the lightbox in `Projects.jsx`. `demo` and `repository` are optional — a falsy value hides that button.
- **Resume download** points at `public/assets/files/DiegoGSA_Resume.pdf` (hardcoded in `src/components/Download.jsx`). To update the resume, replace the file keeping the same name. There is only an English resume; both languages download it.
- **Navigation:** sections have `id`s (`hero`, `about`, `skills`, `experience`, `projects`, `contact`). `Navbar.jsx` intercepts link clicks and smooth-scrolls with a fixed 70px navbar offset. New sections need an `id` and a matching nav entry.
- **Contact form** sends mail client-side via EmailJS (`@emailjs/browser`); service ID, template ID and public key are inline in `src/sections/Contact.jsx`. There is no backend. `@emailjs/browser` is excluded from Vite's `optimizeDeps`.
- **Animations** use `motion` (import from `"motion/react"`). Several components (`FlipWords`, `Marquee`, `Particles`, `Timeline`) are adapted from Aceternity UI / Magic UI snippets, which is why some still carry a `"use client"` directive (harmless in Vite).

## Styling

- Tailwind v4 is wired through the `@tailwindcss/vite` plugin. Configuration is CSS-first: theme tokens (custom colors like `primary`, `midnight`, `aqua`… and the marquee/orbit animations) are defined in the `@theme` block of `src/index.css`. `tailwind.config.js` is a v3-style leftover and is **not** loaded — put theme changes in `index.css`.
- `src/index.css` also defines shared semantic classes via `@apply` that sections rely on: `c-space` (horizontal padding), `section-spacing`, `text-heading`, `subtext-heading`, `headtext`, `subtext`, `hover-animation`, `nav-*`, `grid-1…grid-5` + `gridN-color` (About bento grid), `field-label`/`field-input` (contact form). Reuse these rather than duplicating utility strings.
- Use `twMerge` from `tailwind-merge` when a component accepts a `className` prop to merge with its defaults.

## Lint notes

`no-unused-vars` ignores identifiers starting with an uppercase letter or `_` (pattern `^[A-Z_]`). `react-refresh/only-export-components` is active, so keep component files exporting only components.
