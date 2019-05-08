import BrowserWindow from 'sketch-module-web-view';
import { getWebview } from 'sketch-module-web-view/remote';

const webviewIdentifier = 'nameGenerator.webview';

export default function() {
  const options = {
    identifier: webviewIdentifier,
    width: 690,
    height: 550,
    show: false,
  };

  const browserWindow = new BrowserWindow(options);

  // only show the window when the page has loaded to avoid a white flash
  browserWindow.once('ready-to-show', () => {
    browserWindow.show();
  });

  const webContents = browserWindow.webContents;

  // print a message when the page loads
  webContents.on('did-finish-load', () => {
    webContents.executeJavaScript(`window.location.hash = 'nameGenerator'`).catch(console.error);
  });

  browserWindow.loadURL(require('../../../resources/index.html'));
}

// When the plugin is shutdown by Sketch (for example when the user disable the plugin)
// we need to close the webview if it's open
export function onShutdown() {
  const existingWebview = getWebview(webviewIdentifier);
  if (existingWebview) {
    existingWebview.close();
  }
}
