class Ball{
  constructor(x, y, dx, dy, w, h){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.s = 10
    w = 150;
    h = 30;
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
    this.vel.limit(2)
    var hittingPaddle
    if(this.loc.x > paddle.loc.x &&
      this.loc.x < (paddle.loc.x + this.w) &&
      this.loc.y > paddle.loc.y &&
      this.loc.y < (paddle.loc.y + this.h)
    ){
      hittingPaddle = true;
    }else{
      hittingPaddle = false;
    }
    if (hittingPaddle === true){
     this.vel.x = -this.vel.x;
     this.vel.y = -this.vel.y;
    }
}

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.s, this.s);
    this.clr = color(random(250), random(250), random(250))
  }
}//end ball
