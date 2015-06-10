var remote = require('remote');
var app = remote.require('app');
var template;

if (process.platform === 'darwin') {
  template = [
    {
      label: 'Squiffy',
      submenu: [
        {
          label: 'About Squiffy',
          selector: 'orderFrontStandardAboutPanel:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          label: 'Hide Squiffy',
          accelerator: 'Command+H',
          selector: 'hide:'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:'
        },
        {
          label: 'Show All',
          selector: 'unhideAllApplications:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          selector: 'terminate:'
        },
      ]
    },
    {
      label: 'File',
      submenu: [
        {
          label: 'New',
          accelerator: 'Command+N'
        },
        {
          label: 'Open...',
          accelerator: 'Command+S'
        },
        {
          label: 'Save',
          accelerator: 'Command+S'
        },
        {
          label: 'Save As...',
          accelerator: 'Command+Shift+S'
        },
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'Command+Z',
          selector: 'undo:'
        },
        {
          label: 'Redo',
          accelerator: 'Shift+Command+Z',
          selector: 'redo:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Cut',
          accelerator: 'Command+X',
          selector: 'cut:'
        },
        {
          label: 'Copy',
          accelerator: 'Command+C',
          selector: 'copy:'
        },
        {
          label: 'Paste',
          accelerator: 'Command+V',
          selector: 'paste:'
        },
        {
          label: 'Select All',
          accelerator: 'Command+A',
          selector: 'selectAll:'
        },
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'Command+R',
          click: function() { remote.getCurrentWindow().reloadIgnoringCache(); }
        },
        {
          label: 'Toggle DevTools',
          accelerator: 'Alt+Command+I',
          click: function() { remote.getCurrentWindow().toggleDevTools(); }
        },
      ]
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:'
        },
        {
          label: 'Close',
          accelerator: 'Command+W',
          selector: 'performClose:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Bring All to Front',
          selector: 'arrangeInFront:'
        },
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Documentation'
        }
      ]
    },
  ];
}
else {
  template = [
    {
      label: '&File',
      submenu: [
        {
          label: '&New',
          accelerator: 'Ctrl+N'
        },
        {
          label: '&Open...',
          accelerator: 'Ctrl+S'
        },
        {
          label: '&Save',
          accelerator: 'Ctrl+S'
        },
        {
          label: 'Save &As...',
          accelerator: 'Ctrl+Shift+S'
        },
        {
          type: 'separator'
        },
        {
          label: 'E&xit',
          click: function() { app.quit(); }
        }
      ]
    },
    {
      label: '&Edit',
      submenu: [
        {
          label: '&Undo',
          accelerator: 'Ctrl+Z',
        },
        {
          label: '&Redo',
          accelerator: 'Ctrl+Y',
        },
        {
          type: 'separator'
        },
        {
          label: 'Cu&t',
          accelerator: 'Ctrl+X',
        },
        {
          label: '&Copy',
          accelerator: 'Ctrl+C',
        },
        {
          label: '&Paste',
          accelerator: 'Ctrl+V',
        },
        {
          label: 'Select &All',
          accelerator: 'Ctrl+A',
        },
      ]
    },
    {
      label: '&View',
      submenu: [
        {
          label: '&Reload',
          accelerator: 'Ctrl+R',
          click: function() { remote.getCurrentWindow().reloadIgnoringCache(); }
        },
        {
          label: '&Toggle DevTools',
          accelerator: 'F12',
          click: function() { remote.getCurrentWindow().toggleDevTools(); }
        },
      ]
    },
    {
      label: '&Help',
      submenu: [
        {
          label: '&Documentation'
        }
      ]
    },
  ];
}

var remote = require('remote');
var Menu = remote.require('menu');

menu = Menu.buildFromTemplate(template);

Menu.setApplicationMenu(menu);