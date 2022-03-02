# chrome-extension-template

Starter template for Chrome Web Store extensions

## 🛠️ Development

Using VSCode, you should install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Run

```
npm i
```

then open either HTML file with **Live Server**.

## 📦 Build the extension

The build system is using Gulp.js to minify & copy the required assets & files.

⚠️Before uploading to Chrome Web Store, run

```
npm run build
```

and test the extension from `/build` folder using **Live Server**.

## 🏗️ Loading the built extension in Chrome

- Navigate to [Chrome Extensions page](chrome://extensions/)
- Toggle on the `Develope mode` switch from the right upper corner (if not already on)
- Click `Load unpacked`
- Select the `build` folder
- Test the extension

## 🚀 Distributing the extension

- Archive the `build` folder
- Open the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)
- Upload the archive
