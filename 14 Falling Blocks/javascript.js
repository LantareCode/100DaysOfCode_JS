var canvas, context;
var blockArr=[];

window.onload = function(){
    (function(){
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        
        //resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);
        function resizeCanvas(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();        
        
        addBlocks_toArray();
        
        var framesPerSecond = 30;
        setInterval(update, 1000/framesPerSecond); 
    })();
}

function update(){
    draw();
    move();
}




function draw(){    
    drawBlock(0,0, canvas.width,canvas.height, '#191134'); 
    
    for(var i = 0; i < blockArr.length; i++)
        blockArr[i].draw();
    
    ctx.fillStyle = 'white';
    ctx.font = 'normal bold 12px sans-serif'; 
    ctx.textAlign = 'center'; 
    ctx.fillText('(click!)', canvas.width/2, 20);
}

function move(){    
    for(var i = 0; i < blockArr.length; i++)
        blockArr[i].move();
    
    /*******
        Location is where it is
        Velocity is the direction and speed it is moving
        Acceleration is the speed at which something speeds up or slows down.        
        LOCATION affected by Velocity
        VELOCITY affected by ACC
    *******/
    
}

function drawBlock(x,y, width,height, color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y, width,height);    
} 


var tempUpdateX = tempUpdateY = 0;
var blockSize = 25;

/*var blockSize = 5;*/

function block(){//block item
    //attributes
    this.width = this.height = blockSize;
    
    this.x_location = 5;
    this.y_location = -300;
    
    this.y_velocity = 0;
    this.y_acceleration = 0;//random value
    
    this.bounce = 0.9;
    
    /*this.color = 'white';*/
    var color = ['#390099', '#9E0059', '#FF0054', '#FFBD00', '#05E177', '#FCC035', '#01BEFF', '#F00040', '#A9DC5C'];    
    var colIndex = Math.floor(Math.random()*color.length);
    
    //functions
    this.draw = function(){
        drawBlock(this.x_location,this.y_location, this.width,this.height, color[colIndex]);        
    }    
    this.move = function(){
        
        if(this.y_location > canvas.height-this.height){
            this.y_velocity= -(this.y_velocity * this.bounce);
            this.bounce -= 0.1;
        }
        
        this.y_location += this.y_velocity;    
        this.y_velocity += this.y_acceleration;  
    }
    
    this.startFalling = function(){
        this.y_velocity = Math.floor((Math.random() * 3) + 1);
        this.y_acceleration = Math.floor((Math.random() * 3) + 1);
    } 
    
    this.updateStarting_xLocations = function(){
       this.x_location += tempUpdateX; 
    }
    this.updateStarting_yLocations = function(){
       this.y_location += tempUpdateY; 
    }
}


function addBlocks_toArray(){ 
    //fill the screen with a pattern.
    var blocks_per_row = canvas.width/blockSize; //change this number based on block width
    var num_rows = canvas.height/blockSize; //change this number based on block height   
    
    for(var j = 0; j < num_rows; j++){
        row();
    }
    function row(){
        for(var i = 0; i < blocks_per_row; i++){    
            var tempBlock = new block();
            tempBlock.updateStarting_yLocations(); 
            tempBlock.updateStarting_xLocations();   
            tempUpdateX += (blockSize*2);
            blockArr.push(tempBlock);              
        }
        tempUpdateX = 0;
        tempUpdateY +=(blockSize*2);
    }
}

//click
var started = false;
//When we click we want everything to fall down.
document.addEventListener('click', function(){ 
    if (started === false){
        for(var i = 0; i < blockArr.length; i++)
            blockArr[i].startFalling();
        
        started = true;
    }
    else{//Reserts everything
        blockSize = Math.floor((Math.random() * 30) + 5);
        drawBlock(0,0, canvas.width,canvas.height, 'black');
        blockArr = [];
        tempUpdateX= tempUpdateY = 0;
        addBlocks_toArray();  
        started = false;
    }
});



