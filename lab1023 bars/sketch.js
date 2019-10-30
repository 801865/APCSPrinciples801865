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

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0, 0, 0);
  barWidth = 80;
  numBars = width/barWidth;
  loadBars(numBars);
  runBars(numBars);
  frameRate(1);
}

//  The draw function is called @ 30 fps
function draw(){
  background(0, 0, 0);
  runBars(numBars);
  bubbleSort();
}

function loadBars(num){
  for(l = 0; l < num; l++){
    barHeight = ceil(random(height));
    var loc = createVector(l*barWidth, barHeight);
    bars[l] = new Bar(loc);
  }//sets the settings for the bars
}//end of bars

function runBars(num){
  for(l = 0; l < num; l++){
    bars[l].render();
  }//makes the bars
}//end of runBars

function bubbleSort(){
  for(j = 0; j < bars.length - 1; j++){
    if(bars[j].h > bars[j + 1].h){
      swap(bars, j, j + 1);
    }//check for swap
  }// j loop
}//end of bubbleSort

function swap(bars, x, y){
  temp = bars[x];
  bars[x] = bars[y];
  bars[y] = temp;
}//swap code
