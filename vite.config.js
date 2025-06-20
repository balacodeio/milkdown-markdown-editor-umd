import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MilkdownEditor',
      formats: ['umd'],
      fileName: (format) => `milkdown-kit-bundle.${format}.js`,
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
});
