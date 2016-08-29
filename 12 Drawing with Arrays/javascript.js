var canvas, context;

var blockX = 0, blockY = 0;
var blockWidth = blockHeight = 100;//5x5

window.onload = function(){
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    
    draw();
}

function draw(){
    drawBlock(0,0, canvas.width, canvas.height, 'grey');
    
    var colour = '';
    
    for(var i = 0; i < drawing.length; i++){
        
        //check drawing[i] for: if block or break. if block, check color and draw.
        if(drawing[i] === 'break'){//if break add height to blockY and reset blockX
            blockY += blockHeight;
            blockX = 0;
        }
        else{//if block, check color, draw, add width to blockX.            
            
            switch(drawing[i]){//set colors
                case 'B':
                    colour = 'black';
                    break;
                case 'W':
                    colour = 'white';
                    break;
                default:
                    colour = '#39FF14';
            }
            drawBlock(blockX,blockY, blockWidth, blockHeight, colour);
            blockX += blockWidth;            
        }//else end        
    }
}

function drawBlock(x,y, width,height, colour){ 
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(x,y, width,height);   
}

//draw with string and cut into array?


//if 5x5 canvas draw: 6x5, extra line to show linebreak
var drawing = ['B','W','B','W','B','break',
               'W','B','W','B','W','break',
               'B','W','B','W','B','break',
               'W','B','W','B','W','break',
               'B','W','B','W','B','break'];



/*  
    Draw next to: add blockWidth to blockX
    Draw under: add blockHeight to block Y
*/