const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'milkdown-crepe-bundle.js',
    // Expose the library on the global 'window' object as 'Crepe'
    library: 'Crepe',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true, // Clean the output directory before emit.
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
  mode: 'production',
};
