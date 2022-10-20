import * as PIXI from 'pixi.js'

export default class Character {
  constructor (stage, sheetURL, animation, speed = 0.167) {
    this.animations = {}
    this.x = 0
    this.y = 0
    this.playing = false
    this.speed = speed
    this.animation = animation
    PIXI.Loader.shared
      .add(sheetURL)
      .load(() => {
        Object.keys(PIXI.Loader.shared.resources['cat.json'].spritesheet.animations)
          .forEach(animationName => {
            this.animations[animationName] = new PIXI.AnimatedSprite(PIXI.Loader.shared.resources['cat.json'].spritesheet.animations[animationName])
            stage.addChild(this.animations[animationName])
            this.animations[animationName].visible = false
          })
      })
  }

  play () {
    this.playing = true
  }

  stop () {
    this.playing = false
  }

  update (time) {
    if (!this.animation || !this.animations[this.animation]) {
      return
    }
    Object.keys(this.animations).forEach(a => {
      this.animations[a].visible = this.animation === a
    })

    this.animations[this.animation].x = this.x
    this.animations[this.animation].y = this.y
    this.animations[this.animation].animationSpeed = this.speed

    if (this.playing) {
      this.animations[this.animation].play()
    } else {
      this.animations[this.animation].stop()
    }
  }
}
