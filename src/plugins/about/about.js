const BrowserWindow = require("sketch-module-web-view");
const { getWebview } = require("sketch-module-web-view/remote");

const { getBundleUrl } = require("../index");

const webviewIdentifier = "about.webview";

export default function () {
  const options = {
    identifier: webviewIdentifier,
    width: 690,
    height: 550,
    show: true,
  };

  const browserWindow = new BrowserWindow(options);

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once("ready-to-show", () => {
    browserWindow.show();
  });

  browserWindow.loadURL(getBundleUrl());
}

// When the plugin is shutdown by Sketch (for example when the user disable the plugin)
// we need to close the webview if it's open
export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier);
  if (existingWebview) {
    existingWebview.close();
  }
}
