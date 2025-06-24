import { defineConfig } from 'vite';
import path from 'path';
import styles from 'rollup-plugin-styles';

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'Crepe', // Changed from 'MilkdownEditor' to 'Crepe'
      formats: ['umd'],
      fileName: (format) => `milkdown-crepe-bundle.umd.js`,
    },
    outDir: 'dist-temp', // Output to a temporary directory
    emptyOutDir: true,
    cssCodeSplit: true, // Ensure CSS is split into a separate file
    cssTarget: 'es2015', // Ensure compatibility
    css: {
      // Explicitly configure CSS processing if needed
      // For example, to ensure postcss is used or add plugins
    },
    rollupOptions: {
      output: {
        assetFileNames: `milkdown-crepe-bundle.umd.css`, // Set the name for the extracted CSS file
      },
    },
  },
  plugins: [styles({ mode: "extract" })], // Add rollup-plugin-styles and configure for extraction
});
