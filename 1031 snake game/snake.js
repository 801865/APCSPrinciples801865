//snake.js
var j = 1;
var a =0;

class Snake{
  constructor(x, y, w, h){
    this.head = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vel = createVector(0, 0);
    this.segments = [];
  }//elements of snake

  run(){
    this.render();
    this.update();
  }//end of run


  update(){
    var x = this.head.x;
    var y = this.head.y;
    for(j = this.segments.length - 1; j > 0; j--){
      this.segments[j].x = this.segments[j - 1].x;
      this.segments[j].y = this.segments[j - 1].y;
    }
    if(this.segments.length > 0){
      this.segments[0].x = x;
      this.segments[0].y = y;
    }
    //if(this.segments.length > 0){
    //  for(a = 0; a <= this.segments.length; a++){
        //if(this.segments[a].x === this.head.x && this.segments[a].x === this.head.y){
        //  gameState = 3;
      //  }
    //  }
    //}
    if(x > 0 && x < width && y > 0 && y < height){
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
    for(var i = 0; i < this.segments.length; i++){
      rect(this.segments[i].x, this.segments[i].y, this.w, this.h);
    }//creates new segment
  }//end of render
}//end of snake class
