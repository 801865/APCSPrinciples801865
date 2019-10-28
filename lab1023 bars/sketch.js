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
  background(0, 0, 0);
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
    var barHeight = ceil(random(height));
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
  for(i = list.length - 1; i > 0; i--){
    for(var j = 0; j < i; j++){
      if(lis[j] > list[j + 1]){
        swap(list, j, j + 1);
      }//check for swap
    }// j loop
  }// i loop
}//end of bubbleSort

function swap(list, j, j + 1){
  
}
