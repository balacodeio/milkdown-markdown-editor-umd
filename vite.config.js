import { defineConfig } from 'vite';
import path from 'path';
import { terser } from 'rollup-plugin-terser';

// Helper to get version from package.json
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkg = JSON.parse(readFileSync(`${__dirname}/package.json`, 'utf-8'));
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
      // fileName and assetFileNames are now handled by rollupOptions.output
    },
    // outDir is defined per output in rollupOptions.output
    emptyOutDir: false, // Ensure dist folder is not cleared automatically
    // CSS-related options removed as CSS is built separately
    rollupOptions: {
      output: [
        // Non-minified UMD build
        {
          dir: `dist/${version}`,
          entryFileNames: `milkdown-crepe-bundle.${version}.umd.js`,
          format: 'umd',
          name: 'Crepe',
          // assetFileNames removed: CSS is handled by PostCSS
        },
        // Minified UMD build
        {
          dir: `dist/${version}`,
          entryFileNames: `milkdown-crepe-bundle.${version}.umd.min.js`,
          format: 'umd',
          name: 'Crepe',
          plugins: [terser()], // Apply terser for minified output
          // assetFileNames removed: CSS is handled by PostCSS
        },
      ],
    },
  },
  // No top-level plugins needed for this setup
  plugins: [],
});
