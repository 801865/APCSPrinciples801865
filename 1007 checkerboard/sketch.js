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
    square[i].run();
  }
}



function loadSquares(n){
  for(var i = 0; i < n; i++){
    square[i] = new Square(0, 0, 100, 100);
  }
  //  create a square object and push it into the squares array
  //  create a loop that will push 64 squares into an array
  //  calculate the x and y position interms of the loop control variable

}
