//food.js
class Food{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }// elements of food

  run(){
    this.render();
    this.update();
  }//end of run

  render(){
    fill(255, 0, 0);
    rect(this.x, this.y, this.w, this.h);
  }
  update(){
    if(this.x === snake.head.x && this.y === snake.head.y){
      score = score + 1;
      this.x = ceil(random(width - 30));
      this.y = ceil(random(height - 30));
    }//checks if snake is equal to food and, if true, moves to a different area
  }// end of update
}//end of food class
