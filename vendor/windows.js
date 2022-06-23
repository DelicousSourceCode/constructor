// @ts-check
const { BrowserWindow, ipcMain } = require('electron')
const { ctxMenu } = require('./menus')

function settings() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    roundedCorners: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  window.loadFile('./src/views/settings_step1.html')
  window.webContents.on('context-menu', () => ctxMenu.popup())
  ipcMain.on('close-app', () => window.close())
}

module.exports = {
  settings
}