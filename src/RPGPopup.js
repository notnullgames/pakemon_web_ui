import * as PIXI from 'pixi.js'

export default class RPGPopup {
  constructor (text = '') {
    this.showNext = true

    this.surface = new PIXI.NineSlicePlane(PIXI.Texture.from('dialog.png'), 20, 20, 20, 20)
    this.surface.width = 300
    this.surface.x = 10
    this.textObj = new PIXI.Text(text, { wordWrap: true, wordWrapWidth: 280, fontSize: 12, fill: 0xffffffff })
    this.textObj.x = 10
    this.textObj.y = 10
    this.surface.addChild(this.textObj)

    this.buttonA = PIXI.Sprite.from('./button_A.png')
    this.buttonA.x = 280
    this.surface.addChild(this.buttonA)

    this.surface.zIndex = 100

    this.setText(text)
  }

  setText (text) {
    this.textObj.text = text
    this.surface.height = this.textObj.height + 20
    this.surface.y = 240 - this.surface.height - 20
    this.buttonA.y = this.surface.height - 15
  }

  update (time) {
    if (this.showNext) {
      this.buttonA.visible = Math.round(time) % 60 > 20
    } else {
      this.buttonA.visible = false
    }
  }
}
