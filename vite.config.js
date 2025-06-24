import { defineConfig } from 'vite';
import path from 'path';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';

// Helper to get version from package.json
import pkg from './package.json' assert { type: 'json' };
const version = pkg.version;

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'Crepe',
      formats: ['umd'],
      fileName: (format) => `milkdown-crepe-bundle.umd.js`,
    },
    outDir: undefined, // We'll override output paths below
    emptyOutDir: false, // Don't clear folders automatically
    cssCodeSplit: true,
    cssTarget: 'es2015',
    css: {},
    rollupOptions: {
      output: [
        // Versioned output
        {
          dir: `dist/${version}`,
          assetFileNames: `milkdown-crepe-bundle.umd.css`,
          entryFileNames: `milkdown-crepe-bundle.umd.js`,
          format: 'umd',
          name: 'Crepe',
        },
        {
          dir: `dist/${version}`,
          assetFileNames: `milkdown-crepe-bundle.umd.css`,
          entryFileNames: `milkdown-crepe-bundle.umd.min.js`,
          format: 'umd',
          name: 'Crepe',
          plugins: [terser()],
        },
        // Latest output
        {
          dir: `dist/latest`,
          assetFileNames: `milkdown-crepe-bundle.umd.css`,
          entryFileNames: `milkdown-crepe-bundle.umd.js`,
          format: 'umd',
          name: 'Crepe',
        },
        {
          dir: `dist/latest`,
          assetFileNames: `milkdown-crepe-bundle.umd.css`,
          entryFileNames: `milkdown-crepe-bundle.umd.min.js`,
          format: 'umd',
          name: 'Crepe',
          plugins: [terser()],
        },
      ],
    },
  },
  plugins: [styles({ mode: 'extract' })],
});
