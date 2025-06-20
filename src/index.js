// src/index.js

// src/index.js

// Import the Editor from @milkdown/kit/lib/core.js
const { Editor } = require('@milkdown/kit/lib/core.js');

// Export a function that creates a basic editor instance
module.exports = (options) => {
  return Editor.make(options).create();
};
