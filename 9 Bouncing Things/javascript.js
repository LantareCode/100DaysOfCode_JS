var canvas, context;

var temp = new circle();//temp

function circle(){//class
    //Math.floor(Math.random() * 6) + 1 //1 - 6
    this.x = 110; 
    this.y = 200;     
    this.radius = 10;
    this.speedX = 10; //speed left right
    this.speedY = 15; //speed up down
    
    this.draw = function(){
        drawCircle(this.x,this.y, this.radius, 'red');
    }
    
    this.move = function(){
        this.x += this.speedX;
        this.y += this.speedY; 
        
        //circle direction (bounce)
        if(this.x > canvas.width-this.radius)//right
            this.speedX *= -1;
        if (this.x < this.radius)//left
            this.speedX *= -1;
        if(this.y > canvas.height-this.radius)//bottom
            this.speedY *= -1;
        if (this.y < this.radius)//top
        this.speedY *= -1;
    }
    
}



window.onload = function() {
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');               
    
    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);
}



function updateAll(){    
    draw();
    move();
}

function draw(){    
    //Clear canvas
    drawBlock(0,0, canvas.width,canvas.height, 'white'); 
    
    temp.draw();
    
}
function move(){
    temp.move();   
}

function drawBlock(x,y, width,height, color){ 
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x,y, width,height);   
}

function drawCircle(x,y, radius, color){
    //canvasContext.arc(centerX,centerY, radius, draw_from, draw_to, true); 
    canvasContext.fillStyle = color;
    canvasContext.beginPath();    
    canvasContext.arc(x,y, radius ,0,Math.PI*2, true);
    canvasContext.fill();
}
















