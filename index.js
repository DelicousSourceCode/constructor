// @ts-check
const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const { ctxMenu, macDockMenu } = require('./utils/menus')
const { settings } = require('./utils/windows')

function init() {
  const window = new BrowserWindow({
    width: 1200,
    height: 750,
    frame: false,
    roundedCorners: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  window.loadFile('./src/views/index.html')
  window.webContents.on('context-menu', () => ctxMenu.popup())
  ipcMain.on('close-app', () => window.close())
}

ipcMain.on('new-project', e => {
  dialog.showOpenDialog({
    properties: ['openDirectory']
  }).then(data => {
    if (data.canceled) e.sender.send('selection-cancled')
    else {
      console.log(data.filePaths[0])
      settings()
      e.sender.send('file-selected', data.filePaths[0])
    }
  })
})

app.on('ready', () => process.platform == 'darwin' ? app.dock.setMenu(macDockMenu) : null ).on('ready', init)
app.on('activate', () => BrowserWindow.getAllWindows().length == 0 ? init() : null)
app.on('window-all-closed', () => process.platform != 'darwin' ? app.quit() : null)