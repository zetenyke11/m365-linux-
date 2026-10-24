const { app, BrowserWindow, shell } = require('electron');

const APP_URL = 'https://excel.cloud.microsoft/';

const ALLOWED_EXTERNAL_HOSTS = [
  'microsoft.com',
  'office.com',
  'live.com',
  'microsoftonline.com',
  'microsoft365.com',
  'cloud.microsoft'
];

function isAllowedExternalUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);

    return url.protocol === 'https:' &&
      ALLOWED_EXTERNAL_HOSTS.some(host =>
        url.hostname === host || url.hostname.endsWith('.' + host)
      );
  } catch {
    return false;
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    title: 'Excel Web (Unofficial)',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    }
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (isAllowedExternalUrl(url)) {
      shell.openExternal(url);
    }

    return { action: 'deny' };
  });

  win.webContents.on('will-navigate', (event, url) => {
    if (url === APP_URL) return;

    if (!isAllowedExternalUrl(url)) {
      event.preventDefault();
      return;
    }

    // Keep Microsoft authentication and other allowed pages in the app.
  });

  win.loadURL(APP_URL);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
