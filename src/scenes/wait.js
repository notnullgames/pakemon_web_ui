import { Sprite, Text, Texture } from 'pixi.js'

export default class WaitScene {
  constructor () {
    this.bunny = new Sprite(Texture.from('/bunny.png'))
    this.bunny.x = app.renderer.width / 2
    this.bunny.y = app.renderer.height / 2
    this.bunny.anchor.x = 0.5
    this.bunny.anchor.y = 0.5
    app.stage.addChild(this.bunny)

    this.text = new Text('Please wait while I get some info about your network.', { fontSize: 12, fill: 0xffffffff })
    this.text.x = app.renderer.width / 2
    this.text.y = app.renderer.height / 2 + 50
    this.text.anchor.x = 0.5
    this.text.anchor.y = 0.5
    app.stage.addChild(this.text)
  }

  update () {
    this.bunny.rotation += 0.01
  }
}
