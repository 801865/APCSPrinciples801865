//  Danny Ramirez
// 	12/09/19
//  This is a comment
//  The setup function function is called once when your program begins\
var balls = [];
var numBalls = 10;
var temp = 0;
var ballX = 0;
var ballY = 400;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  loadBalls(numBalls);
}

//  The draw function is called @ 30 fps
function draw(){
  background(0, 0, 0);
  runBalls(numBalls);
  bubbleSort();
  runBalls(numBalls);
}

function loadBalls(num){

  for(var l = 0; l < num; l++){
    ballX = ballX + 75;
    balls[l] = new Ball(ballX, ballY, 50, color(random(50, 255), 0, 0));
  }//sets the parameters of ball
}//end of loadBalls

function runBalls(num){
  for(var l = 0; l < num; l++){
    balls[l].render();
  }//makes the balls
}//end of runBalls

function bubbleSort(){
  for(var j = 0; j < balls.length - 1; j++){
    if(balls[j].clr > balls[j + 1].clr){
      swap(balls, j, j + 1);
    }//check for swap
  }// j loop
  console.log("end");
}//end of bubbleSort

function swap(balls, j, j2){
  temp = balls[j];
  balls[j] = balls[j2];
  balls[j2] = temp;
}//swap code
