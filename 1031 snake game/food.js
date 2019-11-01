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
    this.update();
  }

  render(){
    fill(255, 0, 0);
    rect(this.x, this.y, this.w, this.h);
  }
  update(){
    if(this.x - 15 === snake.x && this.y - 15 === snake.y){
      score = score + 1;
      this.x = random(width - 30);
      this.y = random(height - 30);
      rect(this.x, this.y, this.w, this.h);
    }
  }
}//end of food class
