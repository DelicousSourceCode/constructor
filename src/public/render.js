// @ts-check
const { ipcRenderer } = require('electron')

const closeBtn = document.querySelector('#close-window')
const newProjectBtn = document.querySelector('#new')
const openProjectBtn = document.querySelector('#open')
const fileOverlayEl = document.querySelector('#overlay')

newProjectBtn.addEventListener('click', () => {
  fileOverlayEl.classList.add('active')
  ipcRenderer.send('new-project')
})

ipcRenderer.on('selection-cancled', (e, path) => fileOverlayEl.classList.remove('active'))
ipcRenderer.on('file-selected', (e, path) => console.log(path))

closeBtn.addEventListener('click', () => ipcRenderer.send('close-app'))