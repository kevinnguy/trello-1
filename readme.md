# Trello <img src="static/Icon.png" width="60">

> Unofficial Trello app on Electron


## Features

### Background behavior

When closing the window, the app will continue running in the background, in the dock on macOS and the tray on Linux/Windows. Right-click the dock/tray icon and choose `Quit` to completely quit the app. On macOS, click the dock icon to show the window. On Linux, right-click the tray icon and choose `Toggle` to toggle the window. On Windows, click the tray icon to toggle the window.

If you like to have Trello minimized on startup, open it from the command-line with the `--minimize` flag.


### Desktop notifications

Desktop notifications can be turned on in Preferences.

### Always on Top

You can toggle whether Trello stays on top of other windows in the `Window`/`View` menu or with <kbd>Cmd/Ctrl</kbd> <kbd>Shift</kbd> <kbd>t</kbd>.

### Keyboard shortcuts

Description            | Keys
-----------------------| -----------------------
Toggle "Always on Top" | <kbd>Cmd/Ctrl</kbd> <kbd>Shift</kbd> <kbd>t</kbd>


## Dev

Built with [Electron](http://electron.atom.io).

###### Commands

- Init: `$ npm install`
- Run: `$ npm start`
- Build macOS: `$ npm run build`

