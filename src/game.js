import { Paddle } from "./paddle.js";
import { InputHandler } from "./input.js";
import Ball from "./ball.js";

export default class Game {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    this.gameObjects = [this.paddle, this.ball];
    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(go => go.update(deltaTime));
  }

  draw(ctx) {
    this.gameObjects.forEach(go => go.draw(ctx));
  }
}
