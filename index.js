// @ts-check
const {
  app,
  BrowserWindow,
  ipcMain,
  dialog
} = require('electron')
const { ctxMenu, macDockMenu } = require('./utils/menus')

function loadMain() {
  const window = new BrowserWindow({
    width: 1920,
    height: 1080,
    frame: false,
    roundedCorners: true,
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
    console.log(data.filePaths[0] == undefined ? data.filePaths : null)
    e.sender.send('file-selected', data.filePaths[0])
  })
})

app.on('ready', () => process.platform == 'darwin' ? app.dock.setMenu(macDockMenu) : null ).on('ready', loadMain)
app.on('activate', () => BrowserWindow.getAllWindows().length == 0 ? loadMain : null)
app.on('window-all-closed', () => process.platform != 'darwin' ? app.quit() : null)