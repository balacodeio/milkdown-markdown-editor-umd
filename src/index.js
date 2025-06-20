// src/index.js

// Import the named export 'Crepe' from the library
const { Crepe } = require('@milkdown/crepe');

// Export it as the module's main export.
// This is what will be assigned to `window.Crepe` by Webpack.
module.exports = Crepe;
