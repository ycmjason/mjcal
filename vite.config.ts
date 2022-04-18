import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import { copyFileWithinBundle } from './vite-plugins/copyFileWithinBundle';
import { injectGa } from './vite-plugins/injectGa';

const GA_ID = 'G-8BRGZ1YGE1';

export default defineConfig({
  plugins: [
    react(), //
    injectGa(GA_ID),
    copyFileWithinBundle('index.html', '404.html'),
  ],
  test: {
    environment: 'happy-dom',
    include: ['**/__tests__/*.test.ts'],
  },
});
