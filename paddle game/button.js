//Danny Ramirez
//9/25/19
//button.js
class Button{
  constructor(x, y, w, h, msg, clr){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.clr = clr;
    this.message = msg;//variables
  }

  run(){
    this.render();
    this.update();//these are called in
  }//end of run

  render(){
    fill(this.clr);
    rect(this.x, this.y, this.w, this.h);
    textSize(20);
    fill(255);
    text(this.message, this.x, this.y);//makes buttons appear
  }//end of render

  update(){
    if( mouseIsPressed && mouseX > this.x &&
      mouseX < (this.x + this.w) &&
      mouseY > this.y &&
      mouseY < (this.y + this.h)){
        gameMode = this.message;
        gameState = 2;
        if(gameMode === 'Easy'){
          loadBalls(5);
        }

        if(gameMode === 'Medium'){
          loadBalls(10);
        }

        if(gameMode === 'Hard'){
          loadBalls(20);
        }
    }//sets the # of balls
  }//end of update
}//end of button class
