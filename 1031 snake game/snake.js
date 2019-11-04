//snake.js
class Snake{
  constructor(x, y, w, h){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vel = createVector(0, 0);
  }

  run(){
    this.render();
    this.update();
  }//end of run


  update(){
    var x = this.loc.x;
    var y = this.loc.y;
    if(x > 0 && x < width && y >0 && y < height){
      this.loc.add(this.vel);
      this.vel.limit(30)
    }else{
       this.vel.x = 0;
       this.vel.y = 0;
    }

  }//end of update

  render(){
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}//end of snake class
