import { defineConfig } from 'vite';
import path from 'node:path';
import { globSync } from 'glob';
import { fileURLToPath } from 'node:url';

const tsFiles = Object.fromEntries(globSync('scripts/*.ts').map(file => [
  path.relative(
    'scripts',
    file.slice(0, file.length - path.extname(file).length)
  ),
  fileURLToPath(new URL(file, import.meta.url))
]));

export default defineConfig({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    rollupOptions: {
      input: tsFiles,
      output: {
        entryFileNames: 'x-[name].js',
        chunkFileNames: 'x-[name].js',
        assetFileNames: 'x-[name].[ext]',
      },
    },
  },
});
