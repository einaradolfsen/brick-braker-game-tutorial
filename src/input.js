let that;
export class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", function(event) {
      switch (event.keyCode) {
        case 37: //left arrow key
          paddle.moveLeft();
          break;

        case 39: //right arrow key
          paddle.moveRight();
          break;

        case 27: //escape key
          game.togglePause();
          break;
      }
    });

    document.addEventListener("keyup", function(event) {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;
        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
