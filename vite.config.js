import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  return {
    base: isBuild ? '/react-website-2025/' : '/',
    plugins: [react(), tailwindcss()],
    server: {
      port: 3000,
    },
  };
});
