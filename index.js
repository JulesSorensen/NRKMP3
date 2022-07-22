const client = require('discord-rich-presence')('800429798354583562');
const electron = require('electron')
const {app, BrowserWindow} = electron

client.updatePresence({
    details: "Lytte til NRK radioen",
    state: "🎶🎶🎶",
    startTimestamp: Date.now(),
    largeImageKey: 'nrk_mp3',
    smallImageKey: 'play',
    instance: true,
});

const createWindow = () =>{
    win = new BrowserWindow({
        center: true,
        resizable: true,
        title: "NRK Radio - mP3",
        icon: __dirname + "/images/NRK_MP3.png",
        webPreferences:{
            nodeIntegration: false,
            show: false
        }
    });
    win.setMenuBarVisibility(false);
    win.maximize();
    win.loadURL("https://radio.nrk.no/direkte/mp3");
    win.once('ready-to-show',()=>{
        win.show()
    });

    win.on('closed',()=>{
        win = null;
    });
}

app.on('ready', createWindow);