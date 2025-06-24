# Milkdown Crepe UMD

UMD bundle for the @milkdown/crepe editor.

## Description

This project provides a UMD (Universal Module Definition) bundle for the @milkdown/crepe editor, allowing it to be easily included in any web page with a simple `<script>` tag.

## Usage

You can include the bundle in your HTML file to use the `Crepe` class directly. The bundle exposes a global `Crepe` constructor on the `window` object.

### Using the Latest Build

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Milkdown Crepe UMD Example</title>
    <!-- Link to the required CSS bundle -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@latest/dist/latest/milkdown-crepe-bundle.umd.css">
</head>
<body>
    <div id="editor"></div>
    <script src="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@latest/dist/latest/milkdown-crepe-bundle.umd.js"></script>
    <script>
        // The 'Crepe' class is now available globally
        new Crepe({
            root: document.getElementById('editor'),
            defaultValue: '## Hello from a UMD Build!\n\nThis editor is powered by a self-updating, automatically built UMD module.',
        }).create();
    </script>
</body>
</html>
```

### Using a Specific Version

To use a specific version, replace `<version>` with the desired version (e.g., `7.14.0`):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@<version>/dist/<version>/milkdown-crepe-bundle.umd.css">
<script src="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@<version>/dist/<version>/milkdown-crepe-bundle.umd.js"></script>
```

**Example:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@7.14.0/dist/7.14.0/milkdown-crepe-bundle.umd.css">
<script src="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@7.14.0/dist/7.14.0/milkdown-crepe-bundle.umd.js"></script>
```

### Instantiating the Editor

After including the script, the `Crepe` class is available globally. Example usage:

```js
new Crepe({
    root: document.getElementById('editor'),
    defaultValue: '# Hello Milkdown!\n\nThis is a test of the UMD bundle.',
}).create();
```

### Notes
- The UMD bundle exposes only the `Crepe` class globally. Do **not** try to use `Editor.make()` or destructure from other global variables.
- Always ensure you are referencing the correct path for the CSS and JS files, matching the version you want to use.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any changes.

## License

This project is a UMD (Universal Module Definition) build of the [@milkdown/crepe](https://github.com/Milkdown/milkdown) editor. The original source code is licensed under the MIT License.

```Text
MIT License

Copyright (c) 2023 BalaHeadache Projects

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
