/*
**  Square Constructor Function::
**  eettlin
**  Sept. 11, 2018
*/
//  Add perameters to your constructor function
class Square{
  constructor(x, y, w, h, clr1, clr2){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = w;
    this.clr1 = clr1;
    this.clr2 = clr2;
  }
// Add instance variables to your constructor Function
//What does a square need to know about itself??
  run(){
    this.render();
  }
    render(){
      fill(this.clr2);
      rect(this.x, this.y, this.w, this.h);
      var j = 0;
      for(var s = 0; s <= 8; s++){
        var add = 101;
        for(j = j; j <= 7; j++){
          rect(this.x + add, this.y, this.w, this.h);
          add = add + 101;
          if(j % 2 === 0){
            fill(this.clr1);
          }else{
            fill(this.clr2);
          }
        }
      }
    }

}//  End of Square constructor function
