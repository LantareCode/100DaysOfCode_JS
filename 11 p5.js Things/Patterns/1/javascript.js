function setup(){
    createCanvas(windowWidth,windowHeight);   
    noFill();
}

function draw(){    
    background(255);   
    
    
    var count = 0;
    for(var x = 50; x <= width-50; x += 50){
        for(var y = 50; y<=height-50; y+=50){
            strokeWeight(count*0.06);
            line(x-10,y-10, x+10,y+10);
            line(x+10,y-10, x-10,y+10);
            count++;
        }
    }
    
    
    
}