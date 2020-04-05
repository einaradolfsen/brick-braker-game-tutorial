import { Paddle } from "./paddle.js";
import { InputHandler } from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import { buildLevel, level1 } from "./levels.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.gameState = GAMESTATE.RUNNING;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.bricks = buildLevel(this, level1);

    this.gameObjects = [this.paddle, this.ball, ...this.bricks];
    new InputHandler(this.paddle, this);
  }

  update(deltaTime) {
    if(this.gameState === GAMESTATE.PAUSED) return;
    this.gameObjects.forEach(go => go.update(deltaTime));
    this.gameObjects = this.gameObjects.filter(go => !go.markedForDeletion);
  }

  draw(ctx) {
    this.gameObjects.forEach(go => go.draw(ctx));

    if(this.gameState === GAMESTATE.PAUSED){
      ctx.rect(0,0,this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fill();

      ctx.font ="30px Arial";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight/2);
      
    }
  }

  togglePause(){
      if(this.gameState === GAMESTATE.PAUSED){
          this.gameState = GAMESTATE.RUNNING;
      } else {
        this.gameState = GAMESTATE.PAUSED;
      }
  }
}
