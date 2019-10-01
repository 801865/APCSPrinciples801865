//  Danny Ramirez
// 	8/21/19
//  This is a comment
var balls = []
var paddle;
var gameState = 1
var btnEasy, btnHard, btnMedium;
var gameMode;
var score, health;
var lose, win;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  fill(200, 30, 150);
  loadButtons(3);
  loadBalls(3);
  score = 0;
  health = 5;
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20, 100);
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }

}

function startGame(){
  push();
    textAlign(CENTER);
    translate(400, 200);
    textSize(100);
    fill(random(255), random(255), random(255));
    text('Hit', 10, 20);
  pop();
  btnEasy.run();
  btnMedium.run();
  btnHard.run();
  push();
    textAlign(CENTER);
    translate(400, 300);
    textSize(30);
    fill(255);
    text('Instructions:', 10, 20);
    translate(0, 25);
    text('Move the mouse in order to move the paddle.You will gain', 10, 20);
    translate(0, 25);
    text('points if the balls hit the top of the paddle. You will lose a', 10, 20);
    translate(0, 25);
    text(' life if a ball hits the bottom of the paddle. Good Luck!', 10, 20);
  pop();

}

function playGame(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }

  paddle.run();

  for(var i = balls.length - 1; i >= 0; i--){
    if(balls[i].isColliding()){
          console.log(balls.length)
          balls.splice(i, 1)
          score = score + 100;
    }
  }

  push();
    translate(690, 20);
    fill(255);
    text('Score:', 10, 20);
    translate(60, 0);
    text(score, 10, 20);
  pop();

  if(balls.y < (paddle.y + paddle.h)){
    health = health - 1;
  }

  push();
    translate(10,20);
    fill(255);
    text('Health:', 10, 20);
    translate(70, 0);
    text(health, 10, 20)
  pop();

  if(health <= 0){
    lose = true;
    gameState = 3;
  }

  if(balls.length === 0){
    win = true;
    gameState = 3;
  }
}//end of playGame

function endGame(){
  if(win = true){
    push();
      textAlign(CENTER);
      translate(400, 400);
      textSize(100);
      fill(255, 255, 0);
      text('You win!', 10, 20);
    pop();
  }else if(lose = true){
    push();
      textAlign(CENTER);
      translate(400, 400);
      textSize(100);
      fill(0, 0, 255);
      text('You lost :(', 10, 20);
    pop();
  }

  push();
    textAlign(CENTER);
    translate(400, 600);
    textSize(30);
    fill(255);
    text('Press the reload button to play again.', 10, 20);
  pop();
}

function loadBalls(n){
  paddle = new Paddle(width/2, height -150, 150, 30);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(10,400), (10,-10), (10,-10), i);
  }
}

function loadButtons(){
    btnEasy = new Button(200, 600, 100, 50, 'Easy', color(random(255), random(255), random(255)))
    btnMedium = new Button(400, 600, 100, 50, 'Medium', color(random(255), random(255), random(255)))
    btnHard = new Button(600, 600, 100, 50, 'Hard', color(random(255), random(255), random(255)))
}
