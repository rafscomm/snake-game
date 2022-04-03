
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
    requestAnimationFrame(this.draw);
    }
    move(){

    

    }
      
     

    
    rotate(){

    }

}

let point= () =>{

}



let snake = new Snake(60,60,25);
snake.draw();