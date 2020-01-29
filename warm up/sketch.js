//  Danny Ramirez
// 	12/11/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var i = 0;
var j = 0;
var temp = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadNumbers();
  bubbleSort();
  logNumbers();
  findAvg();
  findMedian();
}

function bubbleSort() {
  for(i = 0; i < list.length - 1; i++){
    for(j = 0; j < list.length - 1 - i; j++){
      if(list[j + 1] < list[j]){
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }// check swap
    }//end of second loop
  }//end of first loop
}//end of bubbleSort

function loadNumbers(){
  list = [ceil(random(1, 100)), ceil(random(1, 100)), ceil(random(1, 100)), ceil(random(1, 100)), ceil(random(1, 100)),
  ceil(random(1, 100)), ceil(random(1, 100)), ceil(random(1, 100)), ceil(random(1, 100)), ceil(random(1, 100)), ceil(random(1, 100))];
}//list

function findAvg(){
  var avg = list[10] - list[0];
  console.log("Average: " + avg);
}// subtracts largest # and smallest # and shows answer in console

function findMedian(){
  var median = list[5];
  console.log("Median: " + median);
}// finds middle value and shows it in console

function logNumbers(){
    console.log(list);
}// shows the list in console

//  The draw function is called @ 30 fps
function draw() {
}
