class Ships{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.w = 10
    this.id = id;
    if(this.id < 0)(this.w = 100)
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
  var distToMainBall;
  if(this.id >= 0){
    distToMainBall = this.loc.dist(planet.loc);
    if(distToMainBall < 200){
      //attraction
    this.acc = p5.Vector.sub(planet.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(sliderAttract.value()/10);
  }
}
  var distToPlanet;
  distToPlanet = this.loc.dist(planet.loc);
  if(distToPlanet < 100){
    planet.loc.x = random(100, 700);
    planet.loc.y = random(100, 700);
  }//planet moves to different location after ship gets close

}
render(){
  fill(this.clr);
  this.angle = this.vel.heading() + PI/2;
  push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-10, 16, 10, 16, 0, -16);
  pop();
}

}//end of Ships class
