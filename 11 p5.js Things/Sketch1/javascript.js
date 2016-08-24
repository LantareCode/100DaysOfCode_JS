function setup(){
    createCanvas(640,480);
    background(200);//single value, shades between white and black.
}

function draw(){
    //ellipse(x,y,width,height)
    //rect(x,y,80,80);
    //line(x1,y1, x2,y2);

    
    strokeWeight(2);//width of the lines around
    
    stroke('blue');       
    line(0,0, 500,300);
    
    
    fill('pink');
    ellipse(100,150,80,80);
    fill(100,25,200,200); //4th val transparent
    ellipse(102,180,80,80);
    
    ellipse(300,300,80,80);
    
    
    //drawing custom shapes
    beginShape();
    fill(255,191,0);
    vertex(100,240);
    vertex(200,180);
    vertex(220,120);
    vertex(160,40);
    endShape();
    fill(0);
    
    
    
    
    
    
    
    
    
    /*if(mouseIsPressed)
        fill(0);    
    else
        fill(225);
    
    ellipse(mouseX,mouseY,80,80);*/
    
    
    
    
    
    
    
}