//Danny Ramirez
//10/31/19
//  This is a comment
//  The setup function function is called once when your program begins
var snake;
var food;
var score = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadSnake();
  loadFood();
}

//  The draw function is called @ 30 fps
function draw(){
  snake.run();
  food.run();
}

function loadSnake(){
  snake = new Snake(400, 400, 30, 30);
}

function loadFood(){
  food = new Food(random(width - 30), random(height - 30), 30, 30);
}
