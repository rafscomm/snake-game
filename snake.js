
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');

    
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect (10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 55, 50);

class Snake{
    constructor(x,y,tail){
      this.x = x;
      this.y = y;
      this.tail =[{x:this.x, y:this.y}];
    }
    draw(){

    }
}