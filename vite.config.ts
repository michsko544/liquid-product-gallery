import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        'index': 'scripts/index.ts',
        'products-slider-top': 'scripts/products-slider-top.ts',
      },
      output: {
        entryFileNames: 'x-[name].js',
        chunkFileNames: 'x-[name].js',
        assetFileNames: 'x-[name].[ext]',
      },
    },
  },
});
