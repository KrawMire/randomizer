const { app, BrowserWindow } = require('electron');

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 700,
        minHeight: 700,
        minWidth: 800
    });

    window.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
       if (BrowserWindow.getAllWindows().length === 0) {
           createWindow();
       } 
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});