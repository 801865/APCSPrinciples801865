//  Your Name
// 	Date or version number
//  This is a comment
//  The setup function function is called once when your program begins
var x, y;
var speedX, speedY;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  x = 200;
  y = 400;
  speedX = 10;
  speedY = 10;

}

//  The draw function is called @ 30 fps
function draw() {
  x = x + speedX
  y = y + speedY
  if(x < 0) {
    speedX = -1 * speedX
  }
  if(x > width){
    speedX = -speedX
  }
  if(y < 0){
    speedY = -1 * speedY
  }
  if(y > height){
    speedY = -speedY
  }
  fill(250, 0, 0);
  ellipse(x - 100, y - 100, 50, 50);
  fill(0, 250, 0);
  ellipse(y, x, 100, 100);
  fill(0, 0, 250);
  ellipse(x + 100, y + 100, 70, 70);
}
