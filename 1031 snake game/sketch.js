//Danny Ramirez
//10/31/19
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var score = 0;
var gameState = 1;
var button;
var speed = 1;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadSnake();
  loadFood();
  loadButton();
}

//  The draw function is called @ 30 fps
function draw(){
  background(5, 5, 5);
  if(gameState === 1){
    startGame();
  }else if(gameState === 2){
    playGame();
  }else if(gameState === 3){
    endGame();
  }
}//end of draw

function startGame(){
  push();
    textAlign(CENTER);
    translate(400, 200);
    textSize(100);
    fill(random(255), random(255), random(255));
    text('Ssssnakesss!', 10, 20);
    textSize(30);
    translate(0, 100);
    fill(250, 250, 250);
    text('Instructions:', 10, 20);
    textSize(20);
    translate(0, 25);
    text('Use the arrow keys to contol the snake(green) in order to get an apple(red).', 10, 20);
    translate(0, 25);
    text("If you crash into the wall or the tail of the snake, it's game over!", 10, 20);
  pop();
  button.run();
}

function playGame(){
  snake.run();
  food.run();
}

function endGame(){
  push();
    textAlign(CENTER);
    translate(400, 200);
    textSize(100);
    fill(random(255), random(255), random(255));
    text('Game over!', 10, 20);
  pop();
}

function loadSnake(){
  snake = new Snake(400, 400, 30, 30);
}

function loadFood(){
  food = new Food(ceil(random(width - 30)), ceil(random(height - 30)), 30, 30);
}

function loadButton(){
  button = new Button(350, 600, 100, 50, 'Start Game?', color(random(255), random(255), random(255)));
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    snake.vel = createVector(-speed, 0);
    console.log("Left arrow " + -speed);
  }
  if(keyCode === RIGHT_ARROW){
    snake.vel = createVector(speed, 0);
    console.log("Right arrow " + speed);
  }
  if(keyCode === UP_ARROW){
    snake.vel = createVector(0, -speed);
    console.log("Up arrow " + -speed);
  }
  if(keyCode === DOWN_ARROW){
    snake.vel = createVector(0, speed);
    console.log("down arrow " + speed);
  }

}
