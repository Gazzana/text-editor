const { app, BrowserWindow } = require('electron');
const electron = require('electron');
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'D:/Scripts/Projects/text-reactor/resources/logo.png' // (html: 00c558) is the main color (just a reminder)
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, '../pages/main/index.html'));

  // Open the DevTools. //! Disabled for testing
  // mainWindow.webContents.openDevTools(); 

  //* Context menu
  const ctxMenu = new Menu()
  ctxMenu.append(new MenuItem(
    {
      label: 'Context Menu',
      click: () => {
        console.log("pogz???");
      }
    }
  ));

  mainWindow.webContents.on('context-menu', function (e, params) {
    ctxMenu.popup(mainWindow, params.x, params.y)
  })
};

// This method will be called when Electron has finished initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
