//ball.js
 class Ball{
   constructor(x, y, w, clr){
    this.x = x;
    this.y = y;
    this.w = w;
    this.clr = clr;
  }//elements of ball

  render(){

    fill(this.clr);
    ellipse(this.x, this.y, this.w);
  }//makes ball
}//end of ball.js
