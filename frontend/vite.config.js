// vite.config.js or vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://portfolio-7lah.onrender.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
