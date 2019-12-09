//  Danny Ramirez
// 	10/23/19
//  This is a comment
//  The setup function function is called once when your program begins\
var balls = [];
var numBalls = 10;
var l = 0;
var i = 0;
var j = 0;
var temp = 0;
var ballX = 0;
var ballY = 0;

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
}

function loadBalls(num){
  for(l = 0; l < num; l++){
    balls[l] = new Ball(ballX = ballX + 50, ballY = ballY + 50, 50, color(random(1, 255), 0, 0));
  }//sets the settings for the bars
}//end of bars

function runBalls(num){
  for(l = 0; l < num; l++){
    balls[l].render();
  }//makes the bars
}//end of runBars

function bubbleSort(){
  for(j = 0; j < balls.length - 1; j++){
    if(balls[j].clr > balls[j + 1].clr){
      swap(balls, j, j + 1);
    }//check for swap
  }// j loop
}//end of bubbleSort

function swap(balls, j, j2){
  temp = balls[j];
  balls[j] = balls[j2];
  balls[j2] = temp;
}//swap code
