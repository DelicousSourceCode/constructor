const { Menu } = require('electron')
const { checkPlatform } = require('./misc')

const ctxMenu = Menu.buildFromTemplate([
  {
    label: 'Select All',
    role: 'selectAll',
    accelerator: checkPlatform('Command+Z', 'Ctrl+Z')
  }, {
    label: 'Refresh',
    role: 'reload'
  }, {
    type: 'separator'
  }, {
    label: 'Cut',
    role: 'cut',
    accelerator: checkPlatform('Command+X', 'Ctrl+X')
  }, {
    label: 'Copy',
    role: 'copy',
    accelerator: checkPlatform('Command+C', 'Ctrl+C')
  }, {
    label: 'Paste',
    role: 'paste',
    accelerator: checkPlatform('Command+V', 'Ctrl+V')
  }
])

const macDockMenu = Menu.buildFromTemplate([
  {
    label: 'New Project'
  }
])

module.exports = {
  ctxMenu,
  macDockMenu
}