//bar.js
class Bar{
  constructor(x, y, w, h, clr){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = random(250);
  }

  run(){
    this.render();
  }

  render(){
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h)
  }
}
