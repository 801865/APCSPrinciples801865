//snake.js
class Snake{
  constructor(x, y, w, h, vx, vy){
    this.loc = createVector(x, y);
    this.w = w;
    this.h = h;
    this.vel = createVector(vx, vy);
  }

  run(){
    this.render();
    this.update();
  }//end of run

  render(){
    fill(0, 255, 0);
    rect(this.loc.x, this.loc.x, this.w, this.h);
  }

  update(){
    this.loc.add(this.vel);
    if(keyIsDown(LEFT_ARROW)){
      //this.loc.x = this.loc.x - this.w;
      this.vel = createVector(-this.w, 0);
    }
    if(keyIsDown(RIGHT_ARROW)){
      //this.loc.x = this.loc.x + this.w;
      this.vel = createVector(this.w, 0);
    }
    if(keyIsDown(UP_ARROW)){
      //this.loc.y = this.loc.y + this.w;
      this.vel = createVector(0, this.w);
    }
    if(keyIsDown(DOWN_ARROW)){
      //this.loc.y = this.loc.y - this.w;
      this.vel = createVector(0, -this.w);
    }
    this.loc.add(this.vel);
  }//end of update
}//end of snake class
