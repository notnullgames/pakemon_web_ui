// this runs canvas, seperate from react app
// window.session has current session value

import * as PIXI from 'pixi.js'

import SceneWelcome from './scenes/scene_welcome'
import SceneMain from './scenes/scene_main'

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

if (import.meta?.env?.PROD) {
  PIXI.utils.skipHello()
}

window.app = new PIXI.Application({
  view: document.getElementById('c'),
  width: 320,
  height: 240
})

window.scenes = {
  welcome: new SceneWelcome(new PIXI.Container()),
  main: new SceneMain(new PIXI.Container())
}

Object.values(window.scenes).forEach(scene => {
  window.app.stage.addChild(scene.stage)
})

// use this to switch active scene
window.changeScene = name => {
  if (window.currentScene) {
    window.currentScene.stage.visible = false
  }
  window.scenes[name].stage.visible = true
  window.currentScene = window.scenes[name]
}

window.app.ticker.add(delta => {
  if (window?.currentScene?.update) {
    window.currentScene.update(delta)
  }
})

window.addEventListener('keydown', e => {
  if (window?.currentScene?.buttonDown) {
    if (e.key === 'z') {
      window.currentScene.buttonDown('A')
    }
    if (e.key === 'x') {
      window.currentScene.buttonDown('B')
    }
    if (e.key === 'a') {
      window.currentScene.buttonDown('X')
    }
    if (e.key === 's') {
      window.currentScene.buttonDown('Y')
    }
  }
})

window.addEventListener('keyup', e => {
  if (window?.currentScene?.buttonUp) {
    if (e.key === 'z') {
      window.currentScene.buttonUp('A')
    }
    if (e.key === 'x') {
      window.currentScene.buttonUp('B')
    }
    if (e.key === 'a') {
      window.currentScene.buttonUp('X')
    }
    if (e.key === 's') {
      window.currentScene.buttonUp('Y')
    }
  }
})

// initial state
window.changeScene('welcome')
