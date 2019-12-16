//  Danny Ramirez
// 	12/16/19
//  This is a comment
//  The setup function function is called once when your program begins
var ship;
var planet = [];
var num = 4;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  loadObjects(num);
}//creates the objects

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20, 30);
  runObjects(num);
}//runs the ship and planets

function loadObjects(n){
  for(var i = 0; i < n; i++){
      planet[i] = new Planet(random(width) - 100, random(height) - 100, -1);
  }
  ship = new Ship(random(width) - 16, random(height) - 16, random(-10, 10), random(-10, 10), 1);
}// gives the ship and planets the compotents they need to be created

function runObjects(n){
  for(var i = 0; i < n; i++){
      planet[i].run();
  }
  ship.run();
}//calls out the planets and the ship
