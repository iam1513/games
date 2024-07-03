document.addEventListener("DOMContentLoaded", () => {
  // Lets get the ball element
  let ball = document.getElementById("ball");
  let table = document.getElementById("table");
  let paddle = document.getElementById("paddle");

  let ballX = 10; // Distance from left of the table
  let ballY = 10; // Distance from top of the table

  ball.style.top = `${ballY}px`;
  ball.style.left = `${ballX}px`;

  let dx = 2; // Displacement in x
  let dy = 2; // Displacement in y

  setInterval(function exec() {
    ballX += dx;
    ballY += dy;
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    // if (ballX > 700 - 20 || ballX <= 0) {
    //   dx *= -1;
    // }
    // if (ballY > 400 - 20 || ballY <= 0) {
    //   dy *= -1;
    // }

    if (
      ballX < paddle.offsetLeft + paddle.offsetWidth &&
      ballY > paddle.offsetTop &&
      ballY - ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight
    ) {
      dx *= -1;
    }
    if (ballX > table.offsetWidth - ball.offsetWidth || ballX <= 0) {
      // To get width and height of dynamic changes in syles to handle for all cases instead of hardcoding
      dx *= -1;
    }
    if (ballY > table.offsetHeight - ball.offsetWidth || ballY <= 0) {
      dy *= -1;
    }
  }, 1);

  let paddleY = 0;
  let pdy = 10; // Paddle displacement in y direction

  document.addEventListener("keydown", (event) => {
    event.preventDefault(); // To prevent default behaviour of arrow keys
    if (
      event.keyCode === 40 &&
      paddleY < table.offsetHeight - paddle.offsetHeight
    ) {
      // Down arrow
      paddleY += pdy;
    } else if (event.keyCode === 38 && paddleY > 0) {
      // Up arrow
      paddleY -= pdy;
    }
    paddle.style.top = `${paddleY}px`;
  });
});
