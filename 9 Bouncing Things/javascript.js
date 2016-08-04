var canvas, context;
var circleArr=[], blockArr=[];

window.onload = function() {
    (function(){
        canvas = document.getElementById('canvas');
        canvasContext = canvas.getContext('2d');
                
        addCircles();
        addBlocks();

        var framesPerSecond = 30;
        setInterval(updateAll, 1000/framesPerSecond);
        
        // resize the canvas to fill browser window dynamically
        window.addEventListener('resize', resizeCanvas, false);        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resizeCanvas();
    })();
}

//click
document.addEventListener('click', function(){    
    var shapeChoice = Math.floor(Math.random()*2)+1;
    if (shapeChoice === 1)
        addCircles();
    else
        addBlocks();        
});


function updateAll(){    
    draw();
    move();
}

function draw(){    
    
    //Clear canvas
    drawBlock(0,0, canvas.width,canvas.height, 'black');     

    canvasContext.fillStyle = 'white';
    canvasContext.font = 'normal bold 18px sans-serif'; 
    canvasContext.textAlign = 'center'; 
    canvasContext.fillText('(click to add shapes)', canvas.width/2, 40);
    
    //circles
    for(var i = 0; i < circleArr.length; i++)
        circleArr[i].draw();  
    
    //blocks
    for(var j = 0; j < blockArr.length; j++)
        blockArr[j].draw();  
}


function move(){
    //circles
    for(var i = 0; i < circleArr.length; i++)
        circleArr[i].move();
    
    //blocks
    for(var j = 0; j < blockArr.length; j++)
        blockArr[j].move(); 
}

function drawBlock(x,y, width,height, color){ 
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x,y, width,height);   
}

function drawCircle(x,y, radius, color){
    canvasContext.fillStyle = color;
    canvasContext.beginPath();    
    canvasContext.arc(x,y, radius ,0,Math.PI*2, true);
    canvasContext.fill();
}


function circle(){    
    this.radius = Math.floor(Math.random()*10)+2;  
    
    this.x = Math.floor(Math.random()*(canvas.width-100))+(this.radius*2); 
    this.y = Math.floor(Math.random()*(canvas.height-100))+(this.radius*2);
    
    this.speedX = Math.floor(Math.random()*15)+1;
    this.speedY = Math.floor(Math.random()*18)+1;
        
    //random direction
    var getSpeedX = Math.floor(Math.random()*2)+1;
    if(getSpeedX === 1)
        this.speedX *= -1;
    
    var getSpeedY = Math.floor(Math.random()*2)+1;
    if(getSpeedY === 1)
        this.speedY *= -1;
    
        
    //random colour
    var colour = ['#390099', '#9E0059', '#FF0054', '#FFBD00', '#05E177'];
    var colIndex = Math.floor(Math.random()*colour.length);
    
    
    //circle functions
    this.draw = function(){
        drawCircle(this.x,this.y, this.radius, colour[colIndex]);
    }    
    this.move = function(){
        this.x += this.speedX;
        this.y += this.speedY; 
        
        //circle direction(bounce)
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
function addCircles(){    
    for(var i = 0; i < 5; i++){
        var tempCircle = new circle();//temp
        circleArr.push(tempCircle);    
    }
}

//block
function block(){       
    this.width = Math.floor(Math.random()*20)+4;  
    this.height = this.width;  
    
    this.x = Math.floor(Math.random()*(canvas.width-100))+this.width; 
    this.y = Math.floor(Math.random()*(canvas.height-100))+this.height;
    
    this.speedX = Math.floor(Math.random()*15)+1;
    this.speedY = Math.floor(Math.random()*18)+1;
        
    //random direction
    var getSpeedX = Math.floor(Math.random()*2)+1;
    if(getSpeedX === 1)
        this.speedX *= -1;
    
    var getSpeedY = Math.floor(Math.random()*2)+1;
    if(getSpeedY === 1)
        this.speedY *= -1;
    
        
    //random colour
    var colour = ['#390099', '#9E0059', '#FF0054', '#FFBD00', '#05E177'];
    var colIndex = Math.floor(Math.random()*colour.length);
    
    
    //block functions
    this.draw = function(){        
        drawBlock(this.x,this.y, this.width,this.height, colour[colIndex]);
    }    
    this.move = function(){
        this.x += this.speedX;
        this.y += this.speedY; 
        
        //block direction(bounce)
        if(this.x > canvas.width-this.width)//right
            this.speedX *= -1;
        if (this.x < 0)//left
            this.speedX *= -1;
        if(this.y > canvas.height-this.height)//bottom
            this.speedY *= -1;
        if (this.y < 0)//top
        this.speedY *= -1;
    }    
}
function addBlocks(){    
    for(var j = 0; j < 5; j++){
        var tempBlock = new block();//temp
        blockArr.push(tempBlock);    
    }
}