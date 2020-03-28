//var canvas = document.getElementById("gameArea");

import { Paddle } from "./src/paddle.js";
import { InputHandler } from "./src/input.js";

// we are setting up the canvas by creating it and appending it to the body,
// because we visual studio don't have the intellisense if we are getting it by id
var canvas = document.createElement("canvas");
canvas.setAttribute("id", "game-area");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

document.getElementById("the-body").appendChild(canvas);
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#00f";

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(paddle);

let lastTime = 0;
function gameLoop(timeStamp) {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  paddle.udate(deltaTime);
  paddle.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();
