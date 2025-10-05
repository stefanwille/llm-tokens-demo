# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application demonstrating LLM tokenization using the `js-tiktoken` library. The app provides an interactive UI where users can input text and see how it's tokenized using the o200k_base encoding, visualizing the token-to-text mapping.

## Architecture

- **Next.js 15 App Router**: Uses the new App Router architecture with `src/app/` as the root
- **Client Components**: Main functionality in `HomeComponent.tsx` (src/app/HomeComponent.tsx:1) uses "use client" directive for interactivity
- **UI Components**: shadcn/ui components in `src/components/ui/` (Table, Input)
- **Tokenization**: js-tiktoken library with o200k_base encoding, initialized as a module-level singleton (src/app/HomeComponent.tsx:19)

## Key Commands

Development:
```bash
pnpm dev          # Start dev server with Turbopack
pnpm build        # Production build with Turbopack
pnpm start        # Start production server
```

Code quality:
```bash
pnpm lint         # Run Biome linter/checker
pnpm format       # Format code with Biome
```

## Technology Stack

- Next.js 15.5.4 with React 19.1.0
- TypeScript 5
- Tailwind CSS 4
- Biome (linting/formatting)
- js-tiktoken for tokenization
- shadcn/ui components
- Turbopack bundler

## Code Structure

- `src/app/page.tsx` - Root page component (wrapper)
- `src/app/HomeComponent.tsx` - Main tokenization demo logic
- `src/components/ui/` - shadcn/ui components (table, input)
- `src/components/Code.tsx` - Custom code display component
- `src/lib/utils.ts` - Utility functions (cn helper)

## Biome Configuration

- 2-space indentation
- Imports auto-organized on save
- Next.js and React recommended rules enabled
- Ignores: node_modules, .next, dist, build
