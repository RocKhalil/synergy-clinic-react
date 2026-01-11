# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server with HMR (http://localhost:5173)
- `npm run build` - Create production build
- `npm run start` - Run production server (requires build first)
- `npm run typecheck` - Run TypeScript type checking (generates route types first)

## Architecture

This is a React Router 7 application using the new framework mode (formerly Remix-like) with server-side rendering enabled.

### Key Files

- `app/routes.ts` - Route configuration using `@react-router/dev/routes`
- `app/root.tsx` - Root layout with HTML document structure, error boundary
- `react-router.config.ts` - Framework configuration (SSR enabled)
- `vite.config.ts` - Vite config with Tailwind CSS 4 and tsconfig paths plugins

### Route Conventions

Routes are defined in `app/routes.ts` using the `RouteConfig` type. Each route file can export:
- `default` - React component
- `meta` - Page metadata
- `loader` - Server-side data loading
- `action` - Form handling/mutations
- `ErrorBoundary` - Route-specific error handling

Route types are auto-generated in `.react-router/types/` - import from `./+types/[route-name]`.

### Path Aliases

`~/` maps to `./app/` (configured in tsconfig.json)

### Styling

Tailwind CSS 4 with the `@tailwindcss/vite` plugin. Global styles in `app/app.css` using `@import "tailwindcss"` and `@theme` for custom properties.
