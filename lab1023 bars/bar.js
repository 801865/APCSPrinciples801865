//bar.js
 class Bar{
   constructor(location, clr){
    this.loc = location;
    this.w = barWidth;
    this.h = height - this.loc.y;
    this.clr = color(random(0, 250), random(0, 250), random(0, 250));
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h);
  }
}
