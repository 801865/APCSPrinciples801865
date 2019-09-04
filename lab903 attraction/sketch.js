//  Danny Ramirez
// 	8/21/19
//  This is a comment
var balls = []
var mainball;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadBalls(10);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20, 100);
  runBalls();
}

function loadBalls(n){
  mainball = new Ball(random(width*2), random(height*2), random(-50, 50), random(-50, 50) -1);
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-10, 10), random(-10, 10));
  }
}

function runBalls(){
  mainball.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }

}
