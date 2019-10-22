//  Danny Ramirez
// 	10/9/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var i = 0;
var j = 0;
var temp = 0;
var swap = 0;
var comparisons = 0;
var time = 0;
var time2 = 0;
var a = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  //list = [11, 5, 4, 1, 20, 30, 500];
  for(a = 0; a < 5; a++){
    list = list + ceil(random(0, 30));
  }
  console.log(list);
  time = millis();
  bubbleSort();
  time2 = millis();
  console.log(list);
  console.log("Swaps: " + swap);
  console.log("Comparisons: " + comparisons);
  console.log("Time in seconds: " + ((time2 - time)/ 1000));
}

function bubbleSort() {
  for(i = 0; i < list.length - 1; i++){
    for(j = 0; j < list.length - 1 - i; j++){
      comparisons = comparisons + 1;
      if(list[j + 1] < list[j]){
        swap = swap + 1;
        temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }// check swap
    }//end of second loop
  }//end of first loop
}//end of bubbleSort

//  The draw function is called @ 30 fps
function draw() {
}
