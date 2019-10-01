//Danny Ramirez
//9/25/19
//ball.js
class Ball{
  constructor(x, y, dx, dy, w, h){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0.01);
    this.clr = color(random(255), random(255), random(255))
    this.s = 20;
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
  if(this.loc.x < 0){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x > width){
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y > height){
    this.vel.y = -this.vel.y;
  }
}

  update(){
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.vel.limit(6);
}//end of update

isColliding(){
    if( this.loc.x > paddle.loc.x &&
        this.loc.x < (paddle.loc.x + paddle.w) &&
        this.loc.y > paddle.loc.y &&
        this.loc.y < (paddle.loc.y + paddle.h)){
      return true;
    }else{
      return false;
    }
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.s, this.s);
  }
}//end ball
