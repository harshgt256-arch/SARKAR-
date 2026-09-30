import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
  },
  build: {
    assetsInlineLimit: 0, // never inline the frame sequence or videos
  },
});
