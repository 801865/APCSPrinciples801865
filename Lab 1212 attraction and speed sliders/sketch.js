//  Danny Ramirez
// 	12/12/19
//  This is a comment
//  The setup function function is called once when your program begins
var sliderAttract, sliderSpeed, sliderText;
var ships = [];
var attraction;
var num = 10;

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  fill(200, 30, 150);
  sliderText = createP("Top is attraction while bottom is speed.")
  sliderText.position(95, 350);
  sliderAttract = createSlider(0, 10, 5);
  sliderAttract.position(200, 400);
  sliderSpeed = createSlider(1, 10, 5);
  sliderSpeed.position(200, 450);
  loadObjects(num);
}

//  The draw function is called @ 30 fps
function draw() {
  background(20, 20, 20, 30);
  runBalls(num);
}

function loadObjects(n){
  planet = new Balls(random(width) - 100, random(height) - 100, random(-50,50), random(-50,50), -1);
  for(var i = 0; i < 10; i++){
    ships[i] = new Ships(random(width) - 16, random(height) - 16, random(-10, 10), random(-10, 10), 1);
  }
}

function runBalls(n){
  planet.run();
  for(var j = 0; j < n; j++){
      ships[j].run();
  }
}
