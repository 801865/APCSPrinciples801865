//  Danny Ramirez
// 	10/23/19
//  This is a comment
//  The setup function function is called once when your program begins\
var bars = [];
var numBars, barWidth;
var l = 0;
var i = 0;
var j = 0;
var temp = 0;
var barHeight = 0;
var j2 = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(250, 250, 250);
  barWidth = 80;
  numBars = width/barWidth;
  loadBars(numBars);
  //sorting code
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 110);
  frameRate(1);
  runBars(numBars);
  bubbleSort();
}

function loadBars(num){
  for(l = 0; l < num; l++){
    barHeight = ceil(random(height));
    var loc = createVector(l*barWidth, barHeight);
    bars[l] = new Bar(loc);
  }
}

function runBars(num){
  for(l = 0; l < num; l++){
    bars[l].render();
  }
}

function bubbleSort(){
  for(i = bars.length - 1; i > 0; i--){
    for(j = 0; j < i; j++){
      if(bars[j] > bars[j + 1]){
        j2 = bars[j + 1]
        swap(bars, j, j + 1);
      }//check for swap
    }// j loop
  }// i loop
}//end of bubbleSort

function swap(bars, j, j2){
  temp = bars[j];
  bars[j] = bars[j2];
  bars[j2] = temp
}
