import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig((command) => {
  if (command === 'build') {
    return {
      base: '/react-website-2025/',
      plugins: [react(), tailwindcss()],
    };
  } else {
    return {
      base: '/',
      plugins: [react(), tailwindcss()],
      server: {
        port: 3000,
      },
    };
  }
});
