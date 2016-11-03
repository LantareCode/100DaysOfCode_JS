var canvas, context;
var blockArr=[];

window.onload = function(){
    (function(){
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        
        addBlocks_toArray();
        
        var framesPerSecond = 30;
        setInterval(update, 1000/framesPerSecond);        
        
        //resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);
        function resizeCanvas(){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();        
    })();
}

function update(){
    draw();
    move();
}

/*var x_location = 500;
var y_location = 5;

//When we click affect these two values.
var y_velocity = 0;
var y_acceleration = 0;*/



function draw(){    
    drawBlock(0,0, canvas.width,canvas.height, 'black');     
    /*drawBlock(x_location,y_location, 30,30, 'white');*/
    for(var i = 0; i < blockArr.length; i++)
        blockArr[i].draw();
}

function move(){
   /* y_location += y_velocity;    
    y_velocity += y_acceleration; */   
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
function block(){//block item
    //attributes
    this.width = 30;
    this.height = 30;
    
    /*this.x_location = Math.floor((Math.random() * 100) + 1);
    this.y_location = Math.floor((Math.random() * 100) + 1);*/
    this.x_location = 5;
    this.y_location = 5;
    
    this.y_velocity = 0;
    this.y_acceleration = 0;//random value
    
    /*this.color = 'white';*/
    var color = ['#390099', '#9E0059', '#FF0054', '#FFBD00', '#05E177'];
    var colIndex = Math.floor(Math.random()*color.length);
    
    //functions
    this.draw = function(){
       drawBlock(this.x_location,this.y_location, this.width,this.height, color[colIndex]);
    }    
    this.move = function(){
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
    var rows = 100; //change this number based on block width
    var cols = 100; //change this number based on block height   
    
    for(var j = 0; j < cols; j++){
        row();
    }
    function row(){
        for(var i = 0; i < rows; i++){    
            var tempBlock = new block();
            tempBlock.updateStarting_yLocations(); 
            tempBlock.updateStarting_xLocations();   
            tempUpdateX +=60;
            blockArr.push(tempBlock);              
        }
        tempUpdateX = 0;
        tempUpdateY +=60;
    }
}


//click
//When we click we want everything to fall down.
document.addEventListener('click', function(){ 
    for(var i = 0; i < blockArr.length; i++)
        blockArr[i].startFalling();
});