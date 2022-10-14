import { NineSlicePlane, Texture } from 'pixi.js'

export default class LoginScene {
  constructor () {
    this.patch = new NineSlicePlane(Texture.from('/ninepatch.png'), 15, 15, 15, 15)
  }

  update () {

  }
}
