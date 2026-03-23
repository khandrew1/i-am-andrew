# i-am-andrew

Static portfolio site for **Andrew Khadder** — a MySpace-inspired layout (designed in [Paper](https://paper.design)), built with React and Tailwind.

**Live repo:** [github.com/khandrew1/i-am-andrew](https://github.com/khandrew1/i-am-andrew)

## Stack

- Vite · React 19 · TypeScript · [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`)

## Scripts

```bash
pnpm install
pnpm dev      # local dev server
pnpm build    # production build → dist/
pnpm preview  # preview production build
pnpm lint     # ESLint
```

Uses `pnpm` (see `packageManager` in `package.json`).

## Project layout

- `src/App.tsx` — page shell
- `src/components/portfolio/` — section panels (profile, blog, blurbs, projects, etc.)
- `public/` — images, resume PDF, and other static assets
