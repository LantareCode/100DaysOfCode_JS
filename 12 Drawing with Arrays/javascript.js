var canvas, context;

var blockX = 0, blockY = 0;
//var blockWidth = blockHeight = 100;//5x5
//var blockWidth = blockHeight = 31.25;//16X16
var blockWidth = blockHeight = 500/18;

$(document).ready(function() {
    $('#drawBtn').click(function(){
        userDraw(); 
    });
});

window.onload = function(){
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 500;
    
    draw();
} 


function userDraw(){
    /*
        When user clicks submit:
            Get x by y blocks and calculate block size.
            Get input string, change into array and display
    */
    
    alert('click');
}

function draw(){
    drawBlock(0,0, canvas.width, canvas.height, 'grey');

    var drawing = pumpkin.replace(/\s+/g,' ').trim().split(' ');//removes white spaces
    var colour = '';   
    
    
    for(var i = 0; i < drawing.length; i++){
        
        //check drawing[i] for: if block or break. if block, check color and draw.
        if(drawing[i] === 'break'){//if break add height to blockY and reset blockX
            blockY += blockHeight;
            blockX = 0;
        }
        else{//if block, check color, draw, add width to blockX.   
            switch(drawing[i]){//set colors
                case 'O'://orange
                    colour = '#D2691E';
                    break;
                case 'G':
                    colour = 'grey';
                    break;
                case 'R':
                    colour = 'red';
                    break;
                case 'BL':
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
    
    //maak die deel 'n optional tick box
    canvasContext.strokeStyle = "black";
    canvasContext.lineWidth = 1;
    canvasContext.strokeRect(x,y, width,height);
}





//if 5x5 canvas draw: 6x5, extra line to show linebreak
/*var drawing = ['B','W','B','W','B','break',
               'W','B','W','B','W','break',
               'B','W','B','W','B','break',
               'W','B','W','B','W','break',
               'B','W','B','W','B','break'];*/


//pumpkin 18x18
var pumpkin = 'G G G G G G G G G G BL BL G G G G G G break G G G G G G G G G G BL BL G G G G G G break G G G G G G G G G BL BL BL G G G G G G break G G G G G G G G BL BL BL G G G G G G G break G G G G BL BL BL G BL BL G BL BL BL G G G G break G G BL BL O BL O BL BL BL BL O BL O BL BL G G break G BL O BL BL O O O O O O O O BL BL O BL G break BL O BL BL O BL BL O O O O BL BL O BL BL O BL break BL O BL O BL BL BL BL O O BL BL BL BL O BL O BL O break BL O BL O BL BL BL BL O O BL BL BL BL O BL O BL O break BL O BL O O BL BL O O O O BL BL O O BL O BL break BL O O O O O O O O O O O O O O O O BL break BL O O O BL O BL O BL BL O BL O BL O O O BL break BL O BL O BL BL BL BL BL BL BL BL BL BL O BL O BL break BL O O BL O BL O BL O O BL O BL O BL O O BL break G BL O O BL O O O O O O O O BL O O BL G break G G BL BL O O O O O O O O O O BL BL G G break G G G G BL BL BL BL BL BL BL BL BL BL G G G G break';

//var drawing = pumpkin.replace(/\s+/g,' ').trim().split(' ');//removes white spaces

//mario mushroom 16x16
/*var drawing = ['W','W','W','W','W','BL','BL','BL','BL','BL','BL','W','W','W','W','W','break',
               'W','W','W','BL','BL','BL','W','R','R','W','BL','BL','BL','W','W','W','break',
               'W','W','BL','BL','W','W','W','R','R','W','W','W','BL','BL','W','W','break',
               'W','BL','BL','R','W','W','R','R','R','R','W','W','R','BL','BL','W','break',
               'W','BL','W','R','R','R','R','R','R','R','R','R','R','W','BL','W','break',
               'BL','BL','W','W','R','R','W','W','W','W','R','R','W','W','BL','BL','break',
               'BL','W','W','W','R','W','W','W','W','W','W','R','W','W','W','BL','break',
               'BL','W','W','W','R','W','W','W','W','W','W','R','W','W','W','BL','break',
               'BL','W','W','W','R','W','W','W','W','W','W','R','W','W','W','BL','break',
               'BL','R','R','R','R','R','W','W','W','W','R','R','R','R','R','BL','break',
               'BL','R','R','BL','BL','BL','BL','BL','BL','BL','BL','BL','BL','R','R','BL','break',
               'BL','BL','BL','BL','W','W','BL','W','W','BL','W','W','BL','BL','BL','BL','break',
               'W','BL','BL','W','W','W','BL','W','W','BL','W','W','W','BL','BL','W','break',
               'W','W','BL','W','W','W','W','W','W','W','W','W','W','BL','W','W','break',
               'W','W','BL','BL','W','W','W','W','W','W','W','W','BL','BL','W','W','break',
               'W','W','W','BL','BL','BL','BL','BL','BL','BL','BL','BL','BL','W','W','W'];*/



/*pumpkin raw
W W W W W W W W W W BL BL W W W W W W break
W W W W W W W W W W BL BL W W W W W W break
W W W W W W W W W BL BL BL W W W W W W break
W W W W W W W W BL BL BL W W W W W W W break
W W W W BL BL BL W BL BL W BL BL BL W W W W break
W W BL BL O BL O BL BL BL BL O BL O BL BL W W break
W BL O BL BL O O O O O O O O BL BL O BL W break
BL O BL BL O BL BL O O O O BL BL O BL BL O BL break
BL O BL O BL BL BL BL O O BL BL BL BL O BL O BL O break
BL O BL O BL BL BL BL O O BL BL BL BL O BL O BL O break
BL O BL O O BL BL O O O O BL BL O O BL O BL break
BL O O O O O O O O O O O O O O O O BL break
BL O O O BL O BL O BL BL O BL O BL O O O BL break
BL O BL O BL BL BL BL BL BL BL BL BL BL O BL O BL break
BL O O BL O BL O BL O O BL O BL O BL O O BL break
W BL O O BL O O O O O O O O BL O O BL W break
W W BL BL O O O O O O O O O O  BL BL W W break
W W W W BL BL BL BL BL BL BL BL BL BL W W W W break*/
