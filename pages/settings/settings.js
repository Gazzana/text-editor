const { ipcRenderer } = require('electron');
const settings = require('./settings.json');
const fs = require('fs');

console.log(settings);

let text = document.getElementById('text');
text.innerText = JSON.stringify(settings);

const saveBtn = document.getElementById('save')

saveBtn.addEventListener('click', () => {
  //* IPC Renderer
  console.log(ipcRenderer.sendSync('load-json-main', text.innerText))


});

