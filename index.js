//var canvas = document.getElementById("gameArea");

import { Paddle } from "./src/paddle.js";

var canvas = document.createElement("canvas");
canvas.setAttribute("id", "game-area");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

document.getElementById("the-body").appendChild(canvas);
var ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
ctx.fillStyle = "#00f";

var paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
paddle.draw(ctx);
