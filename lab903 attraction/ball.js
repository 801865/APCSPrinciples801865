class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.w = 3
    this.id = id;
    if(this.id < 0)(this.w = 50)
  }

  run(){
    this.checkEdges();
    this.update();
    this.render();
  }

  checkEdges(){
  if(this.loc.x < 0){
    this.vel.x = -this.vel.x;
    this.clr = color(random(255), random(255), random(255))
  }
  if(this.loc.x > width){
    this.vel.x = -this.vel.x;
    this.clr = color(random(255), random(255), random(255))
  }
  if(this.loc.y < 0){
    this.vel.y = -this.vel.y;
    this.clr = color(random(255), random(255), random(255))
  }
  if(this.loc.y > height){
    this.vel.y = -this.vel.y;
    this.clr = color(random(255), random(255), random(255))
  }
}

  update(){
    var distToMainBall;
    if(this.id >= 0){
      distToMainBall = this.loc.dist(mainball.loc);
      if(distToMainBall < 250){
        //attraction
      this.acc = p5.Vector.sub(mainball.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    if(distToMainBall < 150){
      //repulsion
      this.acc = p5.Vector.sub(this.loc, mainball.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
    }
    }
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.vel.limit(2)
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
    this.clr = color(random(255), random(255), random(255))
  }

}//end ball class
