//  Danny Ramirez
// 	8/21/19
//  This is a comment
var balls = []
var paddle;
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
  paddle = new Paddle;
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(10,50), (10,-10), (10,-10), i);
  }
}

function runBalls(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
  for(var i = balls.length - 1; i >=0; i--){
    if(balls[i].isColliding()){
      balls.splice(i, 1)
    }
  }

}
