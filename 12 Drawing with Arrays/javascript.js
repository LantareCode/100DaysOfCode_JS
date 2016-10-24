var canvas, context;
var count = 0;

var canvasWidth = canvasHeight = 500;
var blockX = 0, blockY = 0;
var blockWidth = blockHeight = 0;

window.onload = function(){
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
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
    });
};

function resetInput(){    
    document.getElementById('userInput').value = '';
    document.getElementById('userBlocks').value = '';
    document.getElementById('stroke').checked = false;
}


function changeUserPicture(){
    //Get number of bloks
    var block_num = 0;
    if (document.getElementById('userBlocks').value !== ''){
        block_num = document.getElementById('userBlocks').value;
        blockWidth = canvasWidth/block_num;
        blockHeight = canvasHeight/block_num;
    }    
    
    //Get picture
    var user_picture = '';
    if (document.getElementById('userInput').value === '')
        user_picture = pumpkin;
    else if (document.getElementById('userInput').value !== '')              
        user_picture = document.getElementById('userInput').value;          
     
    draw(user_picture);
}

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
                default:
                    colour = '#39FF14';
            }
            
            //check box
            if(document.getElementById('stroke').checked === true)
                drawBlock(blockX,blockY, blockWidth, blockHeight, colour);
            else
                drawBlockNoLines(blockX,blockY, blockWidth, blockHeight, colour);
            
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

function drawBlockNoLines(x,y, width,height, colour){      
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(x,y, width,height);          
}

function displayPicture(){   
    var element = document.getElementById("pictureSelect");
    var selectedPicture = element.options[element.selectedIndex].value;    
    
    var predefinedPicture = '';
    var predefinedBlockNum = ''; 
    var predefinedStroked = false;
    
    switch(selectedPicture){
        case 'chessboard':
            predefinedPicture = 'BL W BL W BL break W BL W BL W break BL W BL W BL break W BL W BL W break BL W BL W BL break';            
            predefinedBlockNum = 5;  
            predefinedStroked = false;
            break;  
        case 'pumpkin':
            predefinedPicture = 'G G G G G G G G G G BL BL G G G G G G break G G G G G G G G G G BL BL G G G G G G break G G G G G G G G G BL BL BL G G G G G G break G G G G G G G G BL BL BL G G G G G G G break G G G G BL BL BL G BL BL G BL BL BL G G G G break G G BL BL O BL O BL BL BL BL O BL O BL BL G G break G BL O BL BL O O O O O O O O BL BL O BL G break BL O BL BL O BL BL O O O O BL BL O BL BL O BL break BL O BL O BL BL BL BL O O BL BL BL BL O BL O BL O break BL O BL O BL BL BL BL O O BL BL BL BL O BL O BL O break BL O BL O O BL BL O O O O BL BL O O BL O BL break BL O O O O O O O O O O O O O O O O BL break BL O O O BL O BL O BL BL O BL O BL O O O BL break BL O BL O BL BL BL BL BL BL BL BL BL BL O BL O BL break BL O O BL O BL O BL O O BL O BL O BL O O BL break G BL O O BL O O O O O O O O BL O O BL G break G G BL BL O O O O O O O O O O BL BL G G break G G G G BL BL BL BL BL BL BL BL BL BL G G G G break';
            predefinedBlockNum = 18;
            predefinedStroked = true;
            break;
        case 'mushroom':
            predefinedPicture = 'W W W W W BL BL BL BL BL BL W W W W W break W W W BL BL BL W R R W BL BL BL W W W break W W BL BL W W W R R W W W BL BL W W break W BL BL R W W R R R R W W R BL BL W break W BL W R R R R R R R R R R W BL W break BL BL W W R R W W W W R R W W BL BL break BL W W W R W W W W W W R W W W BL break BL W W W R W W W W W W R W W W BL break BL W W W R W W W W W W R W W W BL break BL R R R R R W W W W R R R R R BL break BL R R BL BL BL BL BL BL BL BL BL BL R R BL break BL BL BL BL W W BL W W BL W W BL BL BL BL break W BL BL W W W BL W W BL W W W BL BL W break W W BL W W W W W W W W W W BL W W break W W BL BL W W W W W W W W BL BL W W break W W W BL BL BL BL BL BL BL BL BL BL W W W';
            predefinedBlockNum = 16;
            predefinedStroked = false;
            break;
        default:
            console.log('something broke :(');            
    }//switch end
    
    document.getElementById('userInput').value = predefinedPicture;
    
    blockWidth = canvasWidth/predefinedBlockNum;
    blockHeight = canvasHeight/predefinedBlockNum;
        document.getElementById('userBlocks').value = predefinedBlockNum;
    
    document.getElementById('stroke').checked = predefinedStroked;
    
    draw(predefinedPicture);
}
