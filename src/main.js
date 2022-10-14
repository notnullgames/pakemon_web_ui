import { Application, utils } from 'pixi.js'

import WaitScene from './scenes/wait.js'
import LoginScene from './scenes/login.js'

utils.skipHello()

globalThis.app = new Application({ width: 320, height: 240 })
document.body.appendChild(app.view)

// app.currentScene = new LoginScene()
app.currentScene = new WaitScene()

app.ticker.add(() => {
  app.currentScene.update && app.currentScene.update()
})
