//ball.js
 class Ball{
   constructor(x, y, w, clr){
    this.x = x;
    this.y = y;
    this.w = w;
    this.clr = clr;
  }

  render(){
    fill(this.clr);
    rect(this.x, this.y, this.w);
  }
}
