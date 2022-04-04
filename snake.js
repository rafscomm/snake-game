
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');


class Snake{
    constructor(x,y,tail){
      this.x = x;
      this.y = y;
      this.tail =[{x:this.x, y:this.y}];
    }
    draw(){
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (canvas.width/2, canvas.height/2 , 10,10);
    
    }
    move(){
    
    

    }
      
     

    
    rotate(){

    }

}


function point(){
var py = Math.random()*(canvas.height - canvas.height/2) - (canvas.height/2);
var px = Math.random()*(canvas.width - canvas.width/2) - (canvas.width/2);
ctx.fillStyle = "rgb(255,0,0)";
ctx.fillRect(px,py,5,5);
}
point();

let snake = new Snake();
snake.draw();