import * as PIXI from 'pixi.js'

import Scene from './scene'

export default class SceneWelcome extends Scene {
  constructor (stage) {
    super(stage)

    this.showNext = true
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

    this.textBg = new PIXI.NineSlicePlane(PIXI.Texture.from('dialog.png'), 20, 20, 20, 20)
    this.textBg.width = 300
    this.textBg.x = 10
    this.text = new PIXI.Text('', { wordWrap: true, wordWrapWidth: 280, fontSize: 12, fill: 0xffffffff })
    this.text.x = 10
    this.text.y = 10
    this.textBg.addChild(this.text)

    this.buttonA = PIXI.Sprite.from('./button_A.png')
    this.buttonA.x = 280
    this.textBg.addChild(this.buttonA)

    stage.addChild(this.stars)
    stage.addChild(this.bunny)
    stage.addChild(this.textBg)

    this.setText(`Hi, my name is H4x0r.
I'm not really a bunny in space.

Remember: only hack systems you actually have explicit permission to mess with.`)
  }

  setText (text) {
    this.text.text = text
    this.textBg.height = this.text.height + 20
    this.textBg.y = 240 - this.textBg.height - 20
    this.buttonA.y = this.textBg.height - 15
  }

  update (delta) {
    this.time += delta
    this.bunny.rotation += 0.01 * delta
    if (this.showNext) {
      this.buttonA.visible = Math.round(this.time) % 60 > 20
    } else {
      this.buttonA.visible = false
    }
  }

  buttonDown (button) {
    if (button === 'A') {
      window.changeScene('main')
    }
  }
}
