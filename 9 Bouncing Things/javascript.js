var canvas, context;

var ballX = 100; //position: left - right
var ballY = 100; //position: up - down
var ballSpeedX = 0; //speed moving: left or right
var ballSpeedY = 0; //speed moving: up or down

window.onload = function() {
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');        
    drawShapes();
}

function drawShapes(){
    //canvasContext.fillRect(x,y,width,height);       
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(ballX,ballY,50,50);    
}

