//  Danny Ramirez
// 	10/23/19
//  This is a comment
//  The setup function function is called once when your program begins\
var bars = [];
var numBars, barWidth;
var l = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);

  barWidth = 8;
  numBars = width/barWidth;

  loadBars(numBars);
  runBars();
  //sorting code
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 110);
  frameRate(1);
  runBars();
}

function loadBars(num){
  for(l = 0; l < num; l++){
    var barHeight = ceil(random(height));
    var loc = (l*barWidth, barHeight);
    bars[l] = new Bar(loc);
  }
}

function runBars(){
  bars[l].render();
}
