//  Danny Ramirez
// 	8/21/19
//  This is a comment
var ships = []
var attraction, repulsion;
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadBalls(1000);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20, 100);
  runShips();
}

function loadBalls(n){
  repulsion = new Ships(random(width),random(height),random(-50,50), random(-50,50), -1);
  attraction = new Ships(random(width),random(height),random(-50,50), random(-50,50), -1);
  for(var i = 0; i < n; i++){
    ships[i] = new Ships(random(width), random(height), random(-10, 10), random(-10, 10), i);
  }
}

function runShips(){
  attraction.run();
  repulsion.run();
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
  }

}
