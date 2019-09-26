//Danny Ramirez
//9/25/19
//button.js
class Button{
  constructor(x, y, w, h, msg, clr){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.clr = clr;
    this.message = msg;
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    fill(222);
    rect(this.x, this.y, this.w, this.h);
    textSize(20);
    fill(255);
    text(this.message, 0, 0);
  }

  update(){
    if( mouseIsPressed && mouseX > this.x &&
      mouseX < (this.x + this.w) &&
      mouseY > this.y &&
      mouseY < (this.y + this.h)){
        gameState === 2;
      }
  }
}
