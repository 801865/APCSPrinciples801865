//  Danny Ramirez
// 	8/21/19
//  This is a comment
var balls = []
var paddle;
var gameState = 1
var buttons = []
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadBalls(3);
  loadButtons(3);
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }
  background(20, 20, 20, 100);
  //runBalls();
}

function startGame(){
  textAlign(CENTER);
  translate(400, 400);
  textSize(100);
  fill(random(255), random(255), random(255));
  text('Hit', 10, 20);
  buttons[1].run();
  buttons[2].run();
  buttons[3].run();
  translate(-205, 180);
  textSize(40);
  fill(255);
  text('easy', 5, 30);
  translate(200, 0);
  textSize(25);
  fill(255);
  text('medium', 5, 30);
  translate(200, 0);
  textSize(40);
  fill(255);
  text('hard', 5, 30);
}

function playGame(){
    paddle.run();
    for(var i = 0; i < balls.length; i++){
      balls[i].run();
    }

    for(var i = balls.length - 1; i >= 0; i--){
      if(balls[i].isColliding()){
          console.log(balls.length);
          balls.splice(i, 1)
      }
    }
}//end of playGame

function endGame(){
  textAlign(CENTER)
  translate(400, 400)
  textSize(100)
  fill(255)
  text('game has ended', 10, 20)
}

function loadBalls(n){
  paddle = new Paddle(width/2, height-150, 150, 30);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(10,50), (10,-10), (10,-10), i);
  }
}

function loadButtons(){
    buttons[1] = new Button(-200, 200)
    buttons[2] = new Button(0, 200)
    buttons[3] = new Button(200, 200)
}
