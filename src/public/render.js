// @ts-check
const { ipcRenderer } = require('electron')

//#region DOM Elements
const closeBtn = document.querySelector('#close-window')
const newProjectBtn = document.querySelector('#new')
const openProjectBtn = document.querySelector('#open')
const fileOverlay = document.querySelector('#overlay')
//#endregion

newProjectBtn.addEventListener('click', () => {
  fileOverlay.classList.add('active')
  ipcRenderer.send('new-project')
})

ipcRenderer.on('selection-cancled', (e, path) => {
  fileOverlay.classList.remove('active')
})

ipcRenderer.on('file-selected', (e, path) => console.log(path))

closeBtn.addEventListener('click', () => ipcRenderer.send('close-app'))