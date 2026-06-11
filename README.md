# Arcane Engine — website

Landing page for [Arcane](https://github.com/brainy-bots/arcane), a Rust multiplayer-backend library for real-time games at MMO scale. The site presents the product pillars, validated benchmark numbers, and how to get started.

Live at: https://brainy-bots.github.io/arcane-website

## Stack

[Astro](https://astro.build) + Tailwind CSS. Single page (`src/pages/index.astro`) composed from section components in `src/components/` (Hero, Features, Benchmark, GetStarted, Team, Footer).

## Develop

```sh
npm install
npm run dev        # local dev server
npm run build      # production build to ./dist/
npm run preview    # preview the production build
```

## Content rules

- Benchmark numbers on the site must match the published, validated results in [arcane-scaling-benchmarks](https://github.com/brainy-bots/arcane-scaling-benchmarks) — update both together.
- No infrastructure cost figures.
