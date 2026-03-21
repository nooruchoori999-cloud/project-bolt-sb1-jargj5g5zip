# tread.fi Learn

An educational platform for market making on perpetual DEXs, built for TreadFi.

## Overview

This app teaches retail users how to use the TreadFi MM bot to participate in market making on decentralized perpetual exchanges. It covers concepts, strategies, risk management, and glossary terms.

## Architecture

- **Frontend:** React + Wouter + TanStack Query + Tailwind CSS + shadcn/ui
- **Backend:** Express.js (Node.js) on port 5000
- **Theme:** Dark-first (`.dark` class applied globally), cyan/emerald accent palette

## Pages

- `/` — Home: Overview of TreadFi's market making approach
- `/lessons` — Lessons: 6-lesson learning path (beginner → advanced)
- `/glossary` — Glossary: 12 searchable DeFi/trading terms with category filters
- `/faq` — FAQ: 8 accordion-style questions about market making

## Tech Stack

- `wouter` for client-side routing
- `@tanstack/react-query` for data fetching
- `shadcn/ui` component library
- `lucide-react` for icons
- `tailwindcss` with custom theme tokens (cyan/emerald dark palette)

## Key Design Decisions

- Dark mode is always active (added `.dark` class in `main.tsx`)
- Color tokens defined in `client/src/index.css` using HSL values
- `gradient-text-cyan-emerald` and `gradient-bg-cyan-emerald` utility classes for brand gradients
- Static content app — uses in-memory storage (no database needed)

## Development

```
npm run dev   # starts Express + Vite dev server on port 5000
npm run build # builds for production
```
