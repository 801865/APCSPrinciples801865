//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var list = [4, 5, 7, 8];
  function bubbleSort(){
    for (var i = list.length; i >= 0; i--){
      for(var j = 1; j <= i; i++){
        if(list[j - 1]) > list[j]){
          var temp = list[j - 1];
          list[j - 1] = list[j];
          list[j] = temp;
        }// check swap
      }
    }
  }//end of bubbleSort

}

//  The draw function is called @ 30 fps
function draw() {
  console.log(list);
}
