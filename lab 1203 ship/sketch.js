//  Danny Ramirez
// 	8/21/19
//  This is a comment

var ships;
var attraction;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadObjects();
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20, 30);
  runBalls();
}

function loadObjects(){
  attraction = new Balls(random(width - 50), random(height - 50), random(-50,50), random(-50,50), -1);
  ships = new Ships(random(width - 16), random(height - 16), random(-10, 10), random(-10, 10), 1);
}

function runBalls(){
  attraction.run();
  ships.run();
}
