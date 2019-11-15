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
      snake.segments.push(createVector(0 , 0));
      this.x = numCol*ceil(random(0, numCol));
      this.y = numRow*ceil(random(0, numRow));
      if(this.x >= 900 || this.y >= 900){
        this.x = numCol*ceil(random(0, numCol));
        this.y = numRow*ceil(random(0, numRow));
      }//checks if food is outside the canvas
    }//checks if snake is equal to food and, if true, moves to a different area
  }// end of update
}//end of food class
