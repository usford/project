const { app, BrowserWindow} = require('electron')



function createWindow () {
  console.log(__dirname);
  // Создаем окно браузера.
  const win = new BrowserWindow({
    width: 3000,
    height: 3000,
    webPreferences: {
      nodeIntegration: true
    }
  });


  // and load the index.html of the app.
  setTimeout(() => win.loadFile('build/index.html'), 1000);
  win.setFullScreen(true);
  win.setMenu(null);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Некоторые API могут использоваться только после возникновения этого события.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // Для приложений и строки меню в macOS является обычным делом оставаться
  // активными до тех пор, пока пользователь не выйдет окончательно используя Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
   // На MacOS обычно пересоздают окно в приложении,
   // после того, как на иконку в доке нажали и других открытых окон нету.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. Можно также поместить их в отдельные файлы и применить к ним require.