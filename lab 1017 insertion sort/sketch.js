//  Danny Ramirez
// 	10/17/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var i = 0;
var j = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  list = [ceil(random(0, 30)), ceil(random(0, 30)),ceil(random(0, 30)), ceil(random(0, 30)), ceil(random(0, 30))];
  console.log(list);
  insertionSort();
  console.log(list);
}

function insertionSort(){
  for(i = 1; i < list.length; i++){
    for(j = i; j > 0; j--){
      if(list[j] < list[j - 1]){
        swap(list, j, j-1);
      }//swap
    }//j loop
  }// i loop
}//end of insertion sort

//  The draw function is called @ 30 fps
function swap(list, x, y) {
  var temp = list[y];
  list[y] = list[x];
  list[x] = temp;
}//swap code
