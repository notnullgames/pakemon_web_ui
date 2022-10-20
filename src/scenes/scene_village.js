import * as PIXI from 'pixi.js'

import Scene from './scene'
import RPGPopup from '../RPGPopup'
import Character from '../Character'

const animMap = {
  UP: 'N', DOWN: 'S', LEFT: 'W', RIGHT: 'E'
}
const walkSpeed = 1

export default class SceneVillage extends Scene {
  constructor (stage) {
    super(stage)
    this.player = new Character(stage, 'cat.json', 'S')

    this.time = 0
    this.dialogOpen = true
    this.dialog = new RPGPopup('This is a game where you collect wifi passwords.\n\nGotta catch \'em all!')
    stage.addChild(this.dialog.surface)

    this.keys = {
      UP: false, DOWN: false, LEFT: false, RIGHT: false
    }
  }

  update (delta) {
    this.time += delta

    this.dialog.surface.visible = this.dialogOpen
    if (this.dialogOpen) {
      this.dialog.update(this.time)
      this.player.stop()
    } else {
      if (Object.values(this.keys).some(k => k)) {
        this.player.play()
      } else {
        this.player.stop()
      }

      if (this.keys.UP && this.player.y > -10) {
        this.player.y -= walkSpeed * delta
      }

      if (this.keys.DOWN && this.player.y < 210) {
        this.player.y += walkSpeed * delta
      }

      if (this.keys.LEFT && this.player.x > -10) {
        this.player.x -= walkSpeed * delta
      }

      if (this.keys.RIGHT && this.player.x < 300) {
        this.player.x += walkSpeed * delta
      }
    }
    this.player.update(this.time)
  }

  buttonDown (button) {
    if (button === 'A') {
      if (this.dialogOpen) {
        this.dialogOpen = false
      }
    }

    if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(button)) {
      this.keys[button] = true
      this.player.animation = animMap[button]
    }
  }

  buttonUp (button) {
    if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(button)) {
      this.keys[button] = false
    }
  }
}
