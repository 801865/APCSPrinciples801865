// paddle.js
class Paddle{
  constructor(x, y, w, h){
    this.loc = createVector(x,y);
    this.clr = color(0, 0, 250)
    this.w = w;
    this.h = h;
  }

run(){
  this.render();
}

render(){
  fill(this.clr);
  rect(mouseX, this.loc.y, this.w, this.h);

  //this.clr = color(random(250), random(250), random(250))
}

}//end of paddle class
