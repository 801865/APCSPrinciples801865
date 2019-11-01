//food.js
class Food{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  run(){
    this.render();
  }

  render(){
    fill(255, 0, 0);
    rect(this.x, this.y, this.w, this.h);
  }
}
