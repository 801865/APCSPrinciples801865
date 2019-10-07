/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/
//  Add perameters to your constructor function
function Sqr(){
// Add instance variables to your constructor Function
//What does a square need to know about itself??
constructor(x, y, w, h){
    this.x = 0;
    this.y = 0;
    this.w = 20;
    this.h = 20;
    this.clr = color(random(255), random(255), random(255))
}

  this.render = function(){
    rect(this.x, this.y, this.w, this.h);
  }

}//  End of Square constructor function
