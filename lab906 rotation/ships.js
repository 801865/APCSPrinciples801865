class Ships{
  constructor(x, y, dx, dy){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.w = 10
}

run(){
  this.checkEdges();
  this.update();
  this.render();
}

checkEdges(){
  if(this.loc.x < 0) this.loc.x = width;
  if(this.loc.x > width) this.loc.x = 0;
  if(this.loc.y < 0) this.loc.y = height;
  if(this.loc.y > height) this.loc.y = 0;
}

update(){
  this.vel.add(this.acc)
  this.loc.add(this.vel)
  this.vel.limit(2)
}

render(){
  fill(this.clr);
  ellipse(this.loc.x, this.loc.y, this.w, this.w);
  this.clr = color(random(255), random(255), random(255))
}

}//end of Ships class
