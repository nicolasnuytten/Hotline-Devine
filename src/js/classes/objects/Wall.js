export default class Wall extends Phaser.TileSprite {
  constructor(game, x, y, width, height, type = `wall-01`) {
    super(game, x, y, width, height, type);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.enableBody = true;
    this.body.immovable = true;
    this.visible = true;
  }
}
