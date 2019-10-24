//bar.js
 class Bar{
   constructor(location){
    this.loc = location;
    this.w = barWidth;
    this.h = height - this.loc.y;
  }

  render(){
    fill(random(0, 250));
    rect(this.x, this.y, this.w, this.h);
  }
}
