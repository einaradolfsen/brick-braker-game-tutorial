export function detectCollision(ball, gameObject){
       //check collision width paddle
       let bottomBall = ball.position.y + ball.size;
       let topOfBall = ball.position.y;
       let topOfGameObject = gameObject.position.y;
       let leftSideOfGameObject = gameObject.position.x;
       let rigthSideOfGameObject = gameObject.position.x + gameObject.width;
       let bottomGameObject = gameObject.position.y + gameObject.height;
       if (
            bottomBall >= topOfGameObject &&
            topOfBall <= bottomGameObject &&
            ball.position.x >= leftSideOfGameObject &&
            ball.position.x + ball.size <= rigthSideOfGameObject
          ) {
            return true;
       } 

       return false;
}