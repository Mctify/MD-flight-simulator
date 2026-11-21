const {app,BrowserWindow,Menu}=require('electron');
app.commandLine.appendSwitch('ignore-gpu-blocklist');
function create(){
  // webSecurity is off so the app can stream satellite imagery and elevation tiles into WebGL textures from the public tile servers
  const win=new BrowserWindow({width:1600,height:900,backgroundColor:'#000000',autoHideMenuBar:true,title:'MDFS',webPreferences:{contextIsolation:true,webSecurity:false}});
  Menu.setApplicationMenu(null);
  win.loadFile('www/index.html');
  win.webContents.on('before-input-event',(e,i)=>{if(i.type==='keyDown'&&i.key==='F11'){win.setFullScreen(!win.isFullScreen());e.preventDefault()}});
}
app.whenReady().then(create);
app.on('window-all-closed',()=>app.quit());
