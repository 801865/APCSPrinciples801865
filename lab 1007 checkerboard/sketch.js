/*
Lab 911:CheckerBoard
Danny Ramirez
10/07/19
*/

//  Global variables
// Declare squares[] as a global variable
var square = []
// put setup code here
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares(1);
  // Create a function that loads the squares into an
  // array of square objects and call the function
  loadSquares(); //  traverse array and run each square
  for(var i = 0; i < square.length; i++){
    square[1].run();
    square[2].run();
    square[3].run();
    square[4].run();
    square[5].run();
    square[6].run();
    square[7].run();
    square[8].run();
  }
}



function loadSquares(n){
  for(var i = 0; i < n; i++){
    square[1] = new Square(-101, 0, 100, 100, color(0, 0, 0), color(250, 250, 250));
    square[2] = new Square(-101, 101, 100, 100, color(250, 250, 250), color(0, 0, 0));
    square[3] = new Square(-101, 202, 100, 100, color(0, 0, 0), color(250, 250, 250));
    square[4] = new Square(-101, 303, 100, 100, color(250, 250, 250), color(0, 0, 0));
    square[5] = new Square(-101, 404, 100, 100, color(0, 0, 0), color(250, 250, 250));
    square[6] = new Square(-101, 505, 100, 100, color(250, 250, 250), color(0, 0, 0));
    square[7] = new Square(-101, 606, 100, 100, color(0, 0, 0), color(250, 250, 250));
    square[8] = new Square(-101, 707, 100, 100, color(250, 250, 250), color(0, 0, 0));
  }
  //  create a square object and push it into the squares array
  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

}
