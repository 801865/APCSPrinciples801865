// paddle.js
class Paddle{
  constructor(x, y, w, h){
    this.loc = createVector(x,y);
    this.clr = color(random(255), random(255), random(255))
    this.w = w;
    this.h = h;
  }

run(){
  this.render();
  this.update();
}

update(){
  //this.loc.add(this.mouseX, 600)

}

render(){
  fill(this.clr);
  rect(mouseX, this.loc.y, this.w, this.h);

  //this.clr = color(random(250), random(250), random(250))
}

}//end of paddle class
