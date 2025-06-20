import { defineConfig } from 'vite';
import path from 'path';
import styles from 'rollup-plugin-styles';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'MilkdownEditor',
      formats: ['umd'],
      fileName: (format) => `milkdown-crepe-bundle.umd.js`,
    },
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true, // Ensure CSS is split into a separate file
    cssTarget: 'es2015', // Ensure compatibility
    css: {
      // Explicitly configure CSS processing if needed
      // For example, to ensure postcss is used or add plugins
    }
  },
  plugins: [styles({ mode: "extract" })], // Add rollup-plugin-styles and configure for extraction
});
