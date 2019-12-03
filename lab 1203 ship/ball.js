class Balls{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
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

    var distanceX = this.loc.x - ships.loc.x;
    var distanceY = this.loc.y - ships.loc.y;
    if(distanceX <= 100 && distanceY <= 100){
      this.loc.x = random(width);
      this.loc.y = random(height);
    }
    this.vel.add(this.acc)
    this.loc.add(this.vel)
    this.vel.limit(2)
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }

}//end ball
