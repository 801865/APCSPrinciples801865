//  Danny Ramirez
// 	8/21/19
//  This is a comment
var balls = []
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadBalls(2);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20, 1);
  runBalls();
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-10, 10), random(-10, 10));
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
