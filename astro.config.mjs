// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        '.replit.dev',
        '.repl.co', 
        '.kirk.replit.dev',
        '3dbaf293-a119-49de-a520-1a3e23e674d0-00-2tp6ghkc9p0he.kirk.replit.dev',
        'localhost'
      ]
    }
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
