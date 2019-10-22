//  Danny Ramirez
// 	10/17/19
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var i = 0;
var j = 0;
var s_wap = 0;
var comparisons = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  list = [ceil(random(0, 30)), ceil(random(0, 30)),ceil(random(0, 30)), ceil(random(0, 30)), ceil(random(0, 30))];
  console.log(list);
  insertionSort();
  console.log(list);
  console.log("Swaps: " + s_wap);
  console.log("Comparisons: " + comparisons);
}

function insertionSort(){
  for(i = 1; i < list.length; i++){
    for(j = i; j > 0; j--){
      comparisons = comparisons + 1;
      if(list[j] < list[j - 1]){
        swap(list, j, j-1);
      }//swap
    }//j loop
  }// i loop
}//end of insertion sort

//  The draw function is called @ 30 fps
function swap(list, x, y) {
  s_wap = s_wap + 1;
  var temp = list[y];
  list[y] = list[x];
  list[x] = temp;
}//swap code
