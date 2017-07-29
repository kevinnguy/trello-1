'use strict';
const Config = require('electron-config');

module.exports = new Config({
	defaults: {
		darkTheme: true,
		zoomFactor: 0.75,
		lastWindowState: {
			width: 800,
			height: 600
		},
		alwaysOnTop: false
	}
});
