//var canvas = document.getElementById("gameArea");

import Game from "./src/game.js";

// we are setting up the canvas by creating it and appending it to the body,
// because we visual studio don't have the intellisense if we are getting it by id
var canvas = document.createElement("canvas");
canvas.setAttribute("id", "game-area");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

document.getElementById("the-body").appendChild(canvas);
let ctx = canvas.getContext("2d");

ctx.fillStyle = "#00f";

let lastTime = 0;

//images

function gameLoop(timeStamp) {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  game.update(deltaTime);
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
