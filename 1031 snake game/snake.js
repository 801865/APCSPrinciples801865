//snake.js
var j = 0;

class Snake{
  constructor(x, y, w, h){
    this.head = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vel = createVector(0, 0);
    this.segment = [];
  }//elements of snake

  run(){
    this.render();
    this.update();
  }//end of run


  update(){
    if(this.head.x === food.x && this.head.y === food.y){
      j = j++;
      this.segment = [] + j;
      this.segment[j - 1].x = this.head.x;
      this.segment[j - 1].y = this.head.y;
    }//creates segment
    var x = this.head.x;
    var y = this.head.y;
    if(x > 0 && x < width && y >0 && y < height){
      this.head.add(this.vel);
    }else{
       this.vel.x = 0;
       this.vel.y = 0;
       gameState = 3;
    }//checks if snake is off the screen
  }//end of update

  render(){
    fill(0, 255, 0);
    rect(this.head.x, this.head.y, this.w, this.h);
    for(var i = 0; i < this.segment.length; i++){
      rect(this.segment[i].x, this.segment[i].y, this.w, this.h);
    }//creates new segment
  }//end of render
}//end of snake class
