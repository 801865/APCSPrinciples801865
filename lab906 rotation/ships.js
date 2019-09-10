//ships.js
run2(
  this.checkEdges();
  //this.update();
  this.render();
)
  render(
    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-5,8,5,8,0,-8)
    pop();
)
  checkEdges(
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
)
