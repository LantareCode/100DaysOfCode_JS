var canvas, context;

var blockX = 90; //position top left corner: left - right
var blockY = 100; //position top left corner: up - down
var blockSpeedX = 5; //speed moving: left or right
var blockSpeedY = 7; //speed moving: up or down

var circleX = 110; //position middle of circle: left - right
var circleY = 200; //position middle of circle: left - right
var circleRadius = 25;//Size, will be 20 by 20
var drawFrom = 0; //Start of arc
var drawTo = Math.PI*2; //End of arc
var circleSpeedX = 10; //speed moving: left or right
var circleSpeedY = 15; //speed moving: up or down

window.onload = function() {
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');            
    
    //To add motion and make it move 30 times per second:
    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);
}

function updateAll(){    
    draw();
    move();
}

function move(){     
    blockX += blockSpeedX;
    blockY += blockSpeedY;
    
    circleX += circleSpeedX;
    circleY += circleSpeedY; 
    
    //block direction (bounce)
    if(blockX > canvas.width)//If bock reaches the right side of the screen move backwards
        blockSpeedX *= -1;
    if (blockX < 0)//if block reaches the left side of the screen, move other way
        blockSpeedX *= -1;
    if(blockY > canvas.height)//If bock reaches the Bottom
        blockSpeedY *= -1;
    if (blockY < 0)//if block reaches the Top
        blockSpeedY *= -1;
    
    //circle direction (bounce)
    if(circleX > canvas.width)//If cir reaches the right side of the screen move backwards
        circleSpeedX *= -1;
    if (circleX < 0)//if cir reaches the left side of the screen, move other way
        circleSpeedX *= -1;
    if(circleY > canvas.height)//If cir reaches the Bottom
        circleSpeedY *= -1;
    if (circleY < 0)//if cir reaches the top
        circleSpeedY *= -1;
}


function draw(){    
    //Clear canvas
    canvasContext.fillStyle = 'white';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    
    //Squares/rectangles
    //canvasContext.fillRect(x,y,width,height); //x and y of the top left corner
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(blockX,blockY,50,50);        
    
    //Circle
    //canvasContext.arc(x,y, radius, draw_from, draw_to, true); //x and y of the center, true stands for clockwise
    canvasContext.fillStyle = 'red';
    canvasContext.beginPath();    
    canvasContext.arc(circleX,circleY, circleRadius ,drawFrom,drawTo, true);
    canvasContext.fill();
}

