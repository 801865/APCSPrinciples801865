//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  var list = [ 3, 6, 1, 8, 2, 9];
  for(var i = list.length; list >= 0; i--){
    if(list[0] > list[1]){
      swap(list, 0, 1);
    }

    if(list[1] > list[2]){
      swap(list, 1, 2);
    }

    if(list[2] > list[3]){
      swap(list, 2, 3)
    }

    if(list[3] > list[4]){
      swap(list, 3, 4)
    }

    if(list[4] > list[5]){
      swap(list, 4, 5)
    }

    function swap(list, a, b){
      var temp = list[a];
      list[a] = list[b];
      list[b] = temp;
    }
  }
}

//  The draw function is called @ 30 fps
function draw() {
}
