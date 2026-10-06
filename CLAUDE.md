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

- `src/App.jsx` stacks the page sections in order: Navbar → Hero → About → Skills → Projects → Contact → Footer. Each lives in `src/sections/`; reusable/animated pieces live in `src/components/`.
- **Content is data-driven.** Projects, skills and social links are arrays in `src/constants/` (`projects.js`, `skills.js`, `social.js`) and the sections just map over them. Editing portfolio content usually means editing these files, not the JSX.
- **Static assets** live in `public/assets/` and are referenced by absolute paths (`/assets/...`). Project images follow `public/assets/projects/<slug>/img0.jpg … imgN.jpg`; `image` is the card thumbnail and `gallery` feeds the lightbox in `Projects.jsx`. `demo` and `repository` are optional — a falsy value hides that button.
- **Resume download** points at `public/assets/files/DiegoGSA_Resume.pdf` (hardcoded in `src/components/Download.jsx`). To update the resume, replace the file keeping the same name.
- **Navigation:** sections have `id`s (`hero`, `about`, `skills`, `projects`, `contact`). `Navbar.jsx` intercepts link clicks and smooth-scrolls with a fixed 70px navbar offset. New sections need an `id` and a matching nav entry.
- **Contact form** sends mail client-side via EmailJS (`@emailjs/browser`); service ID, template ID and public key are inline in `src/sections/Contact.jsx`. There is no backend. `@emailjs/browser` is excluded from Vite's `optimizeDeps`.
- **Animations** use `motion` (import from `"motion/react"`). Several components (`FlipWords`, `Marquee`, `Particles`) are adapted from Aceternity UI / Magic UI snippets, which is why some still carry a `"use client"` directive (harmless in Vite).

## Styling

- Tailwind v4 is wired through the `@tailwindcss/vite` plugin. Configuration is CSS-first: theme tokens (custom colors like `primary`, `midnight`, `aqua`…, and the marquee/orbit animations) are defined in the `@theme` block of `src/index.css`. `tailwind.config.js` is a v3-style leftover and is **not** loaded — put theme changes in `index.css`.
- `src/index.css` also defines shared semantic classes via `@apply` that sections rely on: `c-space` (horizontal padding), `section-spacing`, `text-heading`, `subtext-heading`, `headtext`, `subtext`, `hover-animation`, `nav-*`, `grid-1…grid-5` + `gridN-color` (About bento grid), `field-label`/`field-input` (contact form). Reuse these rather than duplicating utility strings.
- Use `twMerge` from `tailwind-merge` when a component accepts a `className` prop to merge with its defaults.

## Lint notes

`no-unused-vars` ignores identifiers starting with an uppercase letter or `_` (pattern `^[A-Z_]`). `react-refresh/only-export-components` is active, so keep component files exporting only components.
