// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://brainy-bots.github.io',
  base: '/arcane-website',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
