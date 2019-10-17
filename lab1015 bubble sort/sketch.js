//  Danny Ramirez
// 	10/9/19
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
  list = [11, 5, 4, 1, 20, 30, 500];
  console.log(list);
  bubbleSort();
  console.log(list);
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

//  The draw function is called @ 30 fps
function draw() {
}
