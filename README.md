# Tulas International School Homepage

A responsive homepage redesign for Tulas International School, built with React and Vite.

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Rollup WebAssembly build for Windows compatibility

## Run Locally

Requirements: Node.js 18 or newer and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To create and preview a production build:

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Features

- Custom cursor on fine-pointer devices
- Scroll-triggered reveal animations and animated statistics
- Light/dark theme toggle saved in local storage
- Scroll progress indicator
- Responsive navigation with a mobile menu
- Reduced-motion support

## Deploy

Push the project to a GitHub repository, then import that repository into Vercel or Netlify.

| Setting | Value |
| --- | --- |
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment variables | None required |

## Project Structure

- `src/components/animation/` cursor, reveals, theme toggle, and scroll progress
- `src/components/layout/` navigation and footer
- `src/components/sections/` homepage sections
- `src/components/ui/` shared UI components
- `src/data/content.js` page copy and content
- `src/hooks/` theme and pointer hooks

## Accessibility

The page uses semantic landmarks, labels the theme toggle for assistive technology, and respects the user's reduced-motion preference.
