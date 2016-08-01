var canvas, context;

var circleX = 110; 
var circleY = 200; 
var circleRadius = 25;
var circleSpeedX = 10; //speed left right
var circleSpeedY = 15; //speed up down

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
    block(0,0, canvas.width,canvas.height, 'white');        

    circle(circleX,circleY, circleRadius, 'red');
}


function move(){
    circleX += circleSpeedX;
    circleY += circleSpeedY; 
    
    //circle direction (bounce)
    if(circleX > canvas.width-circleRadius)//right
        circleSpeedX *= -1;
    if (circleX < circleRadius)//left
        circleSpeedX *= -1;
    if(circleY > canvas.height-circleRadius)//bottom
        circleSpeedY *= -1;
    if (circleY < circleRadius)//top
        circleSpeedY *= -1;
}

function block(x,y, width,height, color){ 
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x,y, width,height);   
}

function circle(x,y, radius, color){
    //canvasContext.arc(centerX,centerY, radius, draw_from, draw_to, true); 
    canvasContext.fillStyle = color;
    canvasContext.beginPath();    
    canvasContext.arc(x,y, radius ,0,Math.PI*2, true);
    canvasContext.fill();
}
















