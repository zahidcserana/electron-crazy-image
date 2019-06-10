const {BrowserWindow, app} = require('electron');

let win;
let boot = () => {
    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
          },
        width: 700,
        height: 500,
        frame: false
    });

    win.loadURL(`file://${__dirname}/index.html`);
   // win.webContents.openDevTools();
};

app.on('ready', boot);