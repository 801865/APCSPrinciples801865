//button.js
class Button{
  constructor(x, y){
    this.x = x
    this.y = y
    this.s = 100;
    this.clr = color(random(255), random(255), random(255))
  }

  run(){
    this.render();
    this.update();
  }

  render(){
    fill(this.clr);
    ellipse(this.x, this.y, this.s, this.s)
  }

  update(){
    function mouseClicked(x, y, s){
      console.log(1);
    }
  }
}
