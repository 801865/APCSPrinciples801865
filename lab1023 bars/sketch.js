//  Danny Ramirez
// 	10/23/19
//  This is a comment
//  The setup function function is called once when your program begins\
var bars = [];
var l = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBars(8);
  bars.run();
}

//  The draw function is called @ 30 fps
function draw() {

}

function loadBars(n){
  for(l = 0; l < n; l++){
    bars[l] = new Bar(random(width), random(height), width/n, random(height));
  }
}
