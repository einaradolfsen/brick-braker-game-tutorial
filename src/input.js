let that;
export class InputHandler {
  constructor(paddle) {
    document.addEventListener("keydown", function(event) {
      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();
          break;

        case 39:
          paddle.moveRight();
          break;
      }
    });

    document.addEventListener("keyup", function(event) {
      switch (event.keyCode) {
        case 37:
        case 39:
          paddle.stop();
          break;
      }
    });
  }
}
