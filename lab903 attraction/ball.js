class Ball{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,1);
    this.clr = color(random(255), random(255), random(255))
    this.id = id;
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
    var distotalball;
    if(this.id >= 0){
      distotalball = this.loc.dist(distotalball);
      this.acc = p5.vector.sub(this.loc, other.loc);
      this.acc.normalize();
      this.acc.mult(0,5);
    }
    this.vel.add(this.acc)
    this.loc.add(this.vel)
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 300, 300)
  }

}//end ball class
