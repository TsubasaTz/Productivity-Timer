const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js') // If needed, we can add more functionality later
        }
    });

    // Load the HTML file instead of injecting HTML directly
    mainWindow.loadFile('index.html');
});
