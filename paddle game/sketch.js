//  Danny Ramirez
// 	8/21/19
//  This is a comment

var balls = []
var attraction, repulsion;
var paddle;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadBalls(222);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20, 30);
  runBalls();
}

function loadBalls(n){
  paddle = new Paddle(400, 400, 100, 40);
  //repulsion = new Balls(random(width),random(height),random(-50,50), random(-50,50), -1);
  //attraction = new Balls(random(width),random(height),random(-50,50), random(-50,50), -1);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-10, 10), random(-10, 10), i);
  }
}

function runBalls(){
  paddle.run();
  //attraction.run();
  //repulsion.run();
  for(var i = 0; i < balls.length; i++){
    //ships[i].run();
    balls[i].run();
  }

}
