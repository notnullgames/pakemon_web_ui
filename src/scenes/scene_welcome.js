import * as PIXI from 'pixi.js'

import Scene from './scene'
import RPGPopup from '../RPGPopup'

export default class SceneWelcome extends Scene {
  constructor (stage) {
    super(stage)
    this.time = 0

    this.bunny = PIXI.Sprite.from('bunny.png')
    this.bunny.scale.set(2, 2)
    this.bunny.anchor.set(0.5, 0.5)
    this.bunny.x = 160
    this.bunny.y = 80

    this.stars = new PIXI.Graphics()
    this.stars.lineStyle(0, 0x0000FF, 1)
    for (let i = 0; i < 100; i++) {
      this.stars.beginFill(0xffffff, Math.random())
      this.stars.drawRect(Math.floor(Math.random() * 320), Math.floor(Math.random() * 240), 1, 1)
    }

    this.dialog = new RPGPopup(`Hi, my name is H4x0r.
I'm not really a bunny in space.

Remember: only hack systems you actually have explicit permission to mess with.`)

    stage.addChild(this.stars)
    stage.addChild(this.bunny)
    stage.addChild(this.dialog.surface)
  }

  update (delta) {
    this.time += delta
    this.dialog.update(this.time)
    this.bunny.rotation += 0.01 * delta
  }

  buttonDown (button) {
    if (button === 'A') {
      window.changeScene('village')
    }
  }
}
