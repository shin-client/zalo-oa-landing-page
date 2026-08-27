import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://shin-client.github.io',
  base: '/zalo-oa-landing-page',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
