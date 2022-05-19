// @ts-check
const { ipcRenderer } = require('electron')

const closeBtn = document.querySelector('#close-window')
const newProjectBtn = document.querySelector('#new')
const openProjectBtn = document.querySelector('#open')
const fileOverlay = document.querySelector('#overlay')

newProjectBtn.addEventListener('click', () => {
  fileOverlay.classList.add('active')
  ipcRenderer.send('new-project')
})

ipcRenderer.on('file-selected', (e, path) => console.log(path))

closeBtn.addEventListener('click', () => ipcRenderer.send('close-app'))