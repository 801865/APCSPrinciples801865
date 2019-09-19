// paddle.js
class Paddle{
  constructor(x, y, dx, dy, w, h){
    this.loc = createVector(y);
    this.vel = createVector(dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.w = 150
    this.h = 30
  }

run(){
  this.render();
}

render(){
  rect(mouseX, 600, this.w, this.h);
  this.loc.add(this.vel)
  fill(this.clr);
  this.clr = color(random(250), random(250), random(250))
}

}//end of paddle class
