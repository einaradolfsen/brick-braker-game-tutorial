import {detectCollision} from './collisionDetection.js';

export default class Ball {
  constructor(game) {
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.image = document.getElementById("img-ball");
    this.game = game;
    this.reset();
    this.size = 16;
  }

  reset(){
    this.speed = { x: .25, y: -0.25 };
    this.position = {
      x: 10,
      y: 400
    };
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  update(deltaTime) {
    this.position.x += this.speed.x * deltaTime;
    this.position.y += this.speed.y * deltaTime;

    if (
      this.position.x + this.size >= this.game.gameWidth ||
      this.position.x <= 0
    )
      this.speed.x = -this.speed.x;

      //top of the game
    if ( this.position.y <= 0)
      this.speed.y = -this.speed.y;

      //bottom of the game
    if(this.position.y + this.size >= this.game.gameHeight ) {
       this.game.lives--;
       this.reset();
    }

      if(detectCollision(this, this.game.paddle)){
        //this.speed.x = -this.speed.x;
        this.speed.y = -this.speed.y;
        this.position.y = this.game.paddle.position.y - this.size;
      }
 
  }
}
