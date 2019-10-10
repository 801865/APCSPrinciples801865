//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var list = [];
var j = 1;
var temp = 0;
var i = 4;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  list = [11, 5, 4, 1];
  function bubbleSort(){
    for (i = list.length; i >= 0; i--){
      for(j = 1; j <= i; i++){
        if(list[j - 1] > list[j]){
          temp = list[j - 1];
          list[j - 1] = list[j];
          list[j] = temp;
        }// check swap
      }
    }
  }//end of bubbleSort

}

//  The draw function is called @ 30 fps
function draw() {
}
