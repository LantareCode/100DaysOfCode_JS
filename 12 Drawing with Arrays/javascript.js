var canvas, context;
var count = 0;

var canvasWidth = canvasHeight = 0;
var blockX = 0, blockY = 0;
var blockWidth = blockHeight = 0;

window.onload = function(){
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    
    canvas.width = 500;
    canvas.height = 500;
    
    document.getElementById('pumpkin').selected = true;
    displayPicture();
    
    console.log(count);
    $(document).ready(function() {
        $('#drawBtn').click(function() {            
            changeUserPicture();
        });
        $('#resetInput').click(function() {            
            resetInput();
        }); 
        $('#displayBtn').click(function() {            
            displayPicture();
        }); 
        
        $('#helpBtn').click(function() {            
            instructions();
        });
        $('#hideBtn').click(function() {            
            instructions();
        });
    });
};

function resetInput(){    
    document.getElementById('userInput').value = '';
    document.getElementById('userCanvasWidth').value = '';
    document.getElementById('userCanvasHeight').value = '';
    document.getElementById('userBlocksX').value = '';
    document.getElementById('userBlocksY').value = '';
    document.getElementById('stroke').checked = false;
}


function instructions(){    
    if (document.getElementById('instructions').style.display === 'none')
        document.getElementById('instructions').style.display = 'block';
    else
        document.getElementById('instructions').style.display = 'none';    
}

function changeUserPicture(){
    //Get canvas size
    var custom_canvasWidth = 0;
    var custom_canvasHeight = 0;
    if (document.getElementById('userCanvasWidth').value !== '' || document.getElementById('userCanvasHeight').value !== ''){
        custom_canvasWidth = document.getElementById('userCanvasWidth').value;
        custom_canvasHeight = document.getElementById('userCanvasHeight').value;
        
        canvas.width = custom_canvasWidth;
        canvas.height = custom_canvasHeight;
    }
    
    //Get number of bloks
    var block_numX = 0;
    var block_numY = 0;
    if (document.getElementById('userBlocksX').value !== '' || document.getElementById('userBlocksY').value !== ''){
        block_numX = document.getElementById('userBlocksX').value;
        block_numY = document.getElementById('userBlocksY').value;
        blockWidth =  canvas.width/block_numX;
        blockHeight =  canvas.height/block_numY;
    }       
    
    //Get picture
    var user_picture = '';
    if (document.getElementById('userInput').value === '')
        user_picture = pumpkin;
    else if (document.getElementById('userInput').value !== '')              
        user_picture = document.getElementById('userInput').value;          
     
    draw(user_picture);
}// end changeUserPicture()

function clear(){
    drawBlock(0,0, canvas.width, canvas.height, 'grey');
    blockX = 0;
    blockY = 0;    
}

function draw(picture){  
    clear();    
    var drawing = [];
    
    drawing.splice(0,drawing.length)
    drawing = picture.replace(/\s+/g,' ').trim().split(' ');//removes white spaces
    
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
                case 'B_GR'://bright green
                    colour = '#00CC00';
                    break;
                case 'L_GR'://light green
                    colour = '#A1DD17';
                    break;
                case 'L_B'://Light Blue
                    colour = '#00FFFF';
                    break;
                case 'BR'://Brown
                    colour = '#663300';
                    break;
                default:
                    colour = '#39FF14';//neongreen
            }
            
            //check box
            if(document.getElementById('stroke').checked === true)
                drawBlock(blockX,blockY, blockWidth, blockHeight, colour);
            else
                drawBlockNoLines(blockX,blockY, blockWidth, blockHeight, colour);
            
            blockX += blockWidth;            
        }//else end        
    }
}//end draw(picture)

function drawBlock(x,y, width,height, colour){      
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(x,y, width,height); 
        
    //maak die deel 'n optional tick box
    canvasContext.strokeStyle = "black";
    canvasContext.lineWidth = 1;
    canvasContext.strokeRect(x,y, width,height);    
}

function drawBlockNoLines(x,y, width,height, colour){      
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(x,y, width,height);          
}

function displayPicture(){   
    var element = document.getElementById("pictureSelect");
    var selectedPicture = element.options[element.selectedIndex].value;    
    
    var predefinedPicture = '';
    var predefinedBlockNumX = 0; 
    var predefinedBlockNumY = 0; 
    var predefinedCanvasWidth = 0;
    var predefinedCanvasHeight = 0;
    var predefinedStroked = false;
    
    switch(selectedPicture){
        case 'chessboard':
            predefinedPicture = 'BL W BL W BL break W BL W BL W break BL W BL W BL break W BL W BL W break BL W BL W BL break';
            predefinedBlockNumX = 5; 
            predefinedBlockNumY = 5;  
            predefinedCanvasWidth = predefinedCanvasHeight = 700;
            predefinedStroked = false;
            break;  
        case 'pumpkin':
            predefinedPicture = 'G G G G G G G G G G BL BL G G G G G G break G G G G G G G G G G BL BL G G G G G G break G G G G G G G G G BL BL BL G G G G G G break G G G G G G G G BL BL BL G G G G G G G break G G G G BL BL BL G BL BL G BL BL BL G G G G break G G BL BL O BL O BL BL BL BL O BL O BL BL G G break G BL O BL BL O O O O O O O O BL BL O BL G break BL O BL BL O BL BL O O O O BL BL O BL BL O BL break BL O BL O BL BL BL BL O O BL BL BL BL O BL O BL O break BL O BL O BL BL BL BL O O BL BL BL BL O BL O BL O break BL O BL O O BL BL O O O O BL BL O O BL O BL break BL O O O O O O O O O O O O O O O O BL break BL O O O BL O BL O BL BL O BL O BL O O O BL break BL O BL O BL BL BL BL BL BL BL BL BL BL O BL O BL break BL O O BL O BL O BL O O BL O BL O BL O O BL break G BL O O BL O O O O O O O O BL O O BL G break G G BL BL O O O O O O O O O O BL BL G G break G G G G BL BL BL BL BL BL BL BL BL BL G G G G break';
            predefinedBlockNumX = 18;
            predefinedBlockNumY = 18;
            predefinedCanvasWidth = predefinedCanvasHeight = 500;
            predefinedStroked = true;
            break;
        case 'mushroom':
            predefinedPicture = 'W W W W W BL BL BL BL BL BL W W W W W break W W W BL BL BL W R R W BL BL BL W W W break W W BL BL W W W R R W W W BL BL W W break W BL BL R W W R R R R W W R BL BL W break W BL W R R R R R R R R R R W BL W break BL BL W W R R W W W W R R W W BL BL break BL W W W R W W W W W W R W W W BL break BL W W W R W W W W W W R W W W BL break BL W W W R W W W W W W R W W W BL break BL R R R R R W W W W R R R R R BL break BL R R BL BL BL BL BL BL BL BL BL BL R R BL break BL BL BL BL W W BL W W BL W W BL BL BL BL break W BL BL W W W BL W W BL W W W BL BL W break W W BL W W W W W W W W W W BL W W break W W BL BL W W W W W W W W BL BL W W break W W W BL BL BL BL BL BL BL BL BL BL W W W';
            predefinedBlockNumX = 16;
            predefinedBlockNumY = 16;
            predefinedCanvasWidth = predefinedCanvasHeight = 500;
            predefinedStroked = false;
            break;
        case 'creeper':
            predefinedPicture = 'L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B break L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B L_B break L_B L_B L_B L_B B_GR B_GR B_GR W B_GR B_GR G B_GR G B_GR L_B L_B L_B L_B break L_B L_B L_B L_B B_GR L_GR B_GR B_GR L_GR B_GR B_GR B_GR B_GR B_GR L_B L_B L_B L_B break L_B L_B L_B L_B B_GR B_GR BL BL B_GR B_GR BL BL B_GR B_GR L_B L_B L_B L_B break L_B L_B L_B L_B B_GR W BL BL B_GR L_GR BL BL G B_GR L_B L_B L_B L_B break L_B L_B L_B L_B B_GR B_GR B_GR B_GR B_GR B_GR B_GR B_GR B_GR B_GR L_B L_B L_B L_B break  L_B L_B L_B L_B B_GR L_GR B_GR B_GR BL BL B_GR W B_GR B_GR L_B L_B L_B L_B break  L_B L_B L_B L_B B_GR G B_GR BL BL BL BL B_GR G B_GR L_B L_B L_B L_B break L_B L_B L_B L_B B_GR B_GR B_GR BL B_GR B_GR BL B_GR B_GR B_GR L_B L_B L_B L_B break L_B L_B L_B L_B B_GR B_GR B_GR B_GR B_GR B_GR B_GR B_GR B_GR B_GR L_B L_B L_B L_B break L_B L_B L_B L_B L_B L_B B_GR B_GR W G B_GR B_GR L_B L_B L_B L_B L_B L_B break L_B L_B L_B L_B L_B L_B B_GR G B_GR B_GR B_GR L_GR L_B L_B L_B L_B L_B L_B break L_B L_B L_B L_B L_B L_B B_GR B_GR B_GR B_GR B_GR B_GR L_B L_B L_B L_B L_B L_B break L_B L_B L_B L_B L_B L_B B_GR B_GR B_GR L_GR B_GR B_GR L_B L_B L_B L_B L_B L_B break L_B L_B L_B L_B L_B L_B B_GR L_GR B_GR B_GR B_GR B_GR L_B L_B L_B L_B L_B L_B break L_B L_B L_B L_B L_B L_B B_GR B_GR B_GR B_GR G B_GR L_B L_B L_B L_B L_B L_B break L_B L_B L_B L_B L_B L_B B_GR W B_GR B_GR B_GR B_GR L_B L_B L_B L_B L_B L_B break L_B L_B L_B L_B L_B L_B B_GR W B_GR W B_GR B_GR L_B L_B L_B L_B L_B L_B break BR BR BR BR BR BR B_GR G B_GR L_GR B_GR B_GR BR BR BR BR BR BR break BR BR BR BR BR BR B_GR B_GR B_GR L_GR G B_GR BR BR BR BR BR BR break BR BR BR BR W B_GR B_GR B_GR B_GR B_GR B_GR B_GR L_GR B_GR BR BR BR BR break BR BR BR BR B_GR L_GR B_GR B_GR B_GR G B_GR G L_GR B_GR BR BR BR BR break BR BR BR BR B_GR L_GR B_GR L_GR B_GR B_GR B_GR B_GR B_GR B_GR BR BR BR BR break BR BR BR BR B_GR B_GR B_GR B_GR B_GR B_GR B_GR B_GR B_GR B_GR BR BR BR BR break BR BR BR BR G BL G BL G BL G BL G BL BR BR BR BR break BR BR BR BR BL G BL G BL G BL G BL G BR BR BR BR break BR BR BR BR BR BR BR BR BR BR BR BR BR BR BR BR BR BR break BR BR BR BR BR BR BR BR BR BR BR BR BR BR BR BR BR BR break';
            predefinedBlockNumX = 18;
            predefinedBlockNumY = 29;
            predefinedCanvasWidth = 600;
            predefinedCanvasHeight = 900;
            predefinedStroked = true;
        default:
            console.log('something broke :(');            
    }//switch end
    
    document.getElementById('userInput').value = predefinedPicture;
    
    
    canvas.width = predefinedCanvasWidth;
    canvas.height = predefinedCanvasHeight;
        document.getElementById('userCanvasWidth').value = predefinedCanvasWidth;
        document.getElementById('userCanvasHeight').value = predefinedCanvasHeight;
    
    blockWidth = canvas.width/predefinedBlockNumX;
    blockHeight = canvas.height/predefinedBlockNumY;
        document.getElementById('userBlocksX').value = predefinedBlockNumX;
        document.getElementById('userBlocksY').value = predefinedBlockNumY;        
    
    
    
    document.getElementById('stroke').checked = predefinedStroked;
    
    draw(predefinedPicture);
}//end displayPicture()
