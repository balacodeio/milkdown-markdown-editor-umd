// src/index.js

// Import the Editor from @milkdown/kit
const { Editor } = require('@milkdown/kit');

// Import official plugins
const { history } = require('@milkdown/plugin-history');
const { clipboard } = require('@milkdown/plugin-clipboard');
const { cursor } = require('@milkdown/plugin-cursor');
const { listener } = require('@milkdown/plugin-listener');
const { indent } = require('@milkdown/plugin-indent');
const { upload } = require('@milkdown/plugin-upload');
const { block } = require('@milkdown/plugin-block');
const { tooltip } = require('@milkdown/plugin-tooltip');
const { slash } = require('@milkdown/plugin-slash');
const { collab } = require('@milkdown/plugin-collab');
const { prism } = require('@milkdown/plugin-prism');
const { emoji } = require('@milkdown/plugin-emoji');


// Export a function that creates the editor with all plugins
module.exports = (options) => {
  return Editor.make(options)
    .use(history)
    .use(clipboard)
    .use(cursor)
    .use(listener)
    .use(indent)
    .use(upload)
    .use(block)
    .use(tooltip)
    .use(slash)
    .use(collab)
    .use(prism)
    .use(emoji)
    .create();
};
