# medcom-prog / site-shell

Minimal Vite + React + TS + Tailwind + shadcn template repo used by the
Medcom agent-runner as the starting point for every new customer site.

**This repo should be marked as a "Template repository" in GitHub settings.**
The agent-runner uses GitHub's `POST /repos/:owner/:repo/generate` API to
clone this into `medcom-prog/{customer-slug}` per build.

## What's pre-baked

- Vite + React 18 + TypeScript + Tailwind 3
- `framer-motion` + `lucide-react` pre-installed
- Tailwind config with `ink`, `moss`, `lime`, `cream` color palettes (agent overrides per industry)
- Font pairing `Instrument Serif + Instrument Sans + Geist Mono` (agent may swap)
- CSS utilities: `.grain`, `.animate-ticker`, `.no-scrollbar`, focus-visible rings
- `src/site.config.ts` — typed config schema that every section reads from
- `src/sections/BeforeAfterSlider.tsx` — signature "weird thing" component, reused by cleaning / construction / beauty / photography customers
- Placeholder `src/App.tsx` saying "site is being built" so a freshly-cloned repo never looks broken during the ~90 min build window

## What the agent adds

During Phase 3 (Build) the agent:

1. Overwrites `src/site.config.ts` with real customer data
2. Writes a custom `public/wordmark.svg` via the `build_wordmark` tool
3. Overrides `tailwind.config.ts` colors + fonts per industry pack
4. Installs 21st.dev components via `@21st-dev/magic` when it has API access, otherwise uses the starter sections listed in `scripts/tools/twentyfirst.mjs → listStarterSections()`
5. Writes a new `src/App.tsx` composing the sections in the chosen order
6. Runs `npm run build` to sanity-check, commits, pushes, connects Vercel

## Running locally

```bash
npm install
npm run dev
```

Opens on `http://127.0.0.1:5180`. You'll see the "Siden bygges nå" placeholder.

## Editing the shell

- Add a reusable section at `src/sections/*.tsx`. Register it in the agent-runner's `scripts/tools/twentyfirst.mjs → listStarterSections()` list with a description so the agent knows when to pick it.
- Update `src/site.config.ts` schema if you add new fields the agent needs to fill.
- Update `tailwind.config.ts` base tokens — but remember the agent overrides these per-customer, so these are the fallback only.
