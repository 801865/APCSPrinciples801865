class Planet{
  constructor(x, y, id){
    this.loc = createVector(x,y);
    this.clr = color(random(255), random(255), random(255))
    this.id = id;
  }//compenents of the planets

  run(){
    this.checkEdges();
    this.render();
  }//calls out render and checkEdges

  checkEdges(){
  if(this.loc.x < 0){
    this.loc.x = ceil(random(width));
  }
  if(this.loc.x > width){
    this.loc.x = ceil(random(width));
  }
  if(this.loc.y < 0){
    this.loc.y = ceil(random(height));
  }
  if(this.loc.y > height){
    this.loc.y = ceil(random(height));
  }
}//checks if any planet is out of the canvas

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50, 50);
  }//makes the planets

}//end of planet class
