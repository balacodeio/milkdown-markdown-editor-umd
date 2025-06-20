# Milkdown Crepe UMD

UMD bundle for the @milkdown/crepe editor.

## Description

This project provides a UMD (Universal Module Definition) bundle for the @milkdown/crepe editor, allowing it to be easily included in any web page with a simple `<script>` tag.

## Usage

You can include the bundle in your HTML file to use the Crepe class directly.

For development purposes, use the non-minified bundle:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Milkdown Crepe UMD</title>
    <!-- Link to the required CSS bundle from this repository -->
    <!-- Using the latest version -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@latest/dist/latest/milkdown-crepe-bundle.umd.css">
</head>
<body>
    <!-- Add a container for the editor -->
    <div id="editor"></div>

    <!-- Load your self-hosted UMD bundle from jsDelivr -->
<script src="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@latest/dist/latest/milkdown-crepe-bundle.min.js"></script> <!-- Minified bundle -->
    <script>
        // The 'Crepe' class is now available on the window object
        const crepe = new Crepe({
          root: document.querySelector("#editor"),
          defaultValue: "## Hello from a UMD Build!\n\nThis editor is powered by a self-updating, automatically built UMD module.",
        });

        // Create the editor instance
        crepe.create();
    </script>
</body>
</html>
```

### Specific version

If you would like to use a specific version then indicate it in the URL:

```HTML
<script src="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@<version>/dist/<version>/milkdown-crepe-bundle-<version>.min.js"></script> <!-- Minified bundle -->
```
**Action:** Replace `<version>` with the specific version number you want to use.

### Including the CSS

The build process now extracts the necessary CSS into a single `index.css` file. You can include it by linking to it from this repository's jsDelivr path. Include the following line in your HTML's `<head>` section, replacing `<version>` with the specific version of the UMD bundle you are using:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/balacodeio/milkdown-markdown-editor-umd@<version>/dist/<version>/milkdown-crepe-bundle.umd.css">
```

Alternatively, you can still link to the CSS files from the official Milkdown Crepe CDN or self-host them, although linking to the extracted CSS from this repository is now the recommended method.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any changes.

## License

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
