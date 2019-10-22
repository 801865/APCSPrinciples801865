//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list= [];
var i = 0;
var j = 0;
var index = 0;
var smallerNumber = 0;
swap = 0;
comparisons = 0;
var time = 0;
var time2 = 0;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  list = [ceil(random(0, 30)), ceil(random(0, 30)),ceil(random(0, 30)), ceil(random(0, 30)), ceil(random(0, 30)),
  ceil(random(0, 30)), ceil(random(0, 30)), ceil(random(0, 30)), ceil(random(0, 30)), ceil(random(0, 30))];
  console.log(list);
  time = millis();
  selectionSort();
  time2 = millis();
  console.log(list);
  console.log("Swaps: " + swap);
  console.log("Comparisons: " + comparisons);
  console.log("Time in seconds: " + ((time2 - time)/ 1000));
}

function selectionSort(){
  for(i = 0; i < list.length - 1; i++){
    index = i;
    for(j = i + 1; j < list.length; j++){
      if(list[j] < list[index]){
        comparisons = comparisons + 1;
        index = j;
      }//sets smallest # to index
    }//finds smallest #
    swap = swap + 1;
    smallerNumber = list[index];
    list[index] = list[i];
    list[i] = smallerNumber;
  }//1st foreloop
}//end of selection sort
//  The draw function is called @ 30 fps
function draw() {

}
