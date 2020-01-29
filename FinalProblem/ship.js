class Ship{
  constructor(x, y, dx, dy, id){
    this.loc = createVector(x,y);
    this.vel = createVector(dx,dy);
    this.acc = createVector(0,0);
    this.clr = color(random(255), random(255), random(255))
    this.w = 10
    this.id = id;
    if(this.id < 0)(this.w = 100)
}//components of ship

run(){
  this.checkEdges();
  this.update();
  this.render();
}// calls out update, render, and checkEdges

checkEdges(){
  if(this.loc.x < 0){
    this.acc.mult(0);
    this.vel.x = -this.vel.x;
  }
  if(this.loc.x > width){
    this.acc.mult(0);
    this.vel.x = -this.vel.x;
  }
  if(this.loc.y < 0){
    this.acc.mult(0);
    this.vel.y = -this.vel.y;
  }
  if(this.loc.y > height){
    this.acc.mult(0);
    this.vel.y = -this.vel.y;
  }
}//checks if ship is outside of canvas

update(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.vel.limit(2);
  var distToClosestPlanet;
  if(this.id >= 0){
    for(var i = 0; i < 4; i++){
      distToClosestPlanet = this.loc.dist(planet[i].loc);
      if(distToClosestPlanet < 200){
        this.acc = p5.Vector.sub(planet[i].loc, this.loc);
        this.acc.normalize();
        this.acc.mult(0.1);
      }//attracts the ship towards a planet
    }//to check for all planets
  }//id check
  var distToPlanet;
  for(var i = 0; i < 4; i++){
    distToPlanet = this.loc.dist(planet[i].loc);
    if(distToPlanet < 100){
      planet[i].loc.x = random(100, 700);
      planet[i].loc.y = random(100, 700);
    }//planet moves to different location after ship gets close
  }//code that checks for all planets
}//end of update
render(){
  fill(this.clr);
  this.angle = this.vel.heading() + PI/2;
  push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    triangle(-10, 16, 10, 16, 0, -16);
  pop();
}//creates the ship

}//end of Ship class
