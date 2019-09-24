//button.js
class Button{
  constructor(x, y){
    this.x = -200;
    this.y = 200;
    this.s = 100;
    this.clr = color(random(255), random(255), random(255))
  }

  run(){
    this.render();
  }

  render(){
    fill(this.clr);
    ellipse(this.x, this.y, this.s, this.s)
  }
}
