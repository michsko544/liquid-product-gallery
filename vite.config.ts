import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        swiper: 'scripts/swiper.ts',
      },
      output: {
        entryFileNames: 'x-[name].js',
        chunkFileNames: 'x-[name].js',
        assetFileNames: 'x-[name].[ext]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use './global.scss' as *;",
      },
    },
  },
});
