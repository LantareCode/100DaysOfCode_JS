//cubeDisappear function:
//  Makes cubes disappear at random times
//  Calls cubeAppear function at a random time.
function callAppear(funcName){ 
    return (setTimeout(funcName, Math.random()*2000));
}

var disappearTimer1;    function cubeDisappear_1(){
    document.getElementById("cube1").style.visibility = "hidden";  
    disappearTimer1 = callAppear(cubeAppear_1);    
}
var disappearTimer2;    function cubeDisappear_2(){
    document.getElementById("cube2").style.visibility = "hidden";
    disappearTimer2 = callAppear(cubeAppear_2);    
}
var disappearTimer3;    function cubeDisappear_3(){
    document.getElementById("cube3").style.visibility = "hidden";
    disappearTimer3 = callAppear(cubeAppear_3);
}
var disappearTimer4;    function cubeDisappear_4(){
    document.getElementById("cube4").style.visibility = "hidden";
    disappearTimer4 = callAppear(cubeAppear_4);
}
var disappearTimer5;    function cubeDisappear_5(){
    document.getElementById("cube5").style.visibility = "hidden";
    disappearTimer5 = callAppear(cubeAppear_5);
}
var disappearTimer6;    function cubeDisappear_6(){
    document.getElementById("cube6").style.visibility = "hidden";
    disappearTimer6 = callAppear(cubeAppear_6);
}
var disappearTimer7;    function cubeDisappear_7(){
    document.getElementById("cube7").style.visibility = "hidden";
    disappearTimer7 = callAppear(cubeAppear_7);
}

//cubeAppear function:
//  Makes cubes appear at random times
//  Calls disappearTimer function at a random time.
function callDisappear(funcName){   
    return (setTimeout(funcName,((Math.random()*2000)+1000)));
}
var appearTimer1;   function cubeAppear_1(){
    document.getElementById("cube1").style.visibility = "visible";
    appearTimer1 = callDisappear(cubeDisappear_1);    
}
var appearTimer2;   function cubeAppear_2(){
    document.getElementById("cube2").style.visibility = "visible";
    appearTimer2 = callDisappear(cubeDisappear_2);    
}
var appearTimer3;   function cubeAppear_3(){
    document.getElementById("cube3").style.visibility = "visible";
    appearTimer3 = callDisappear(cubeDisappear_3); 
}
var appearTimer4;   function cubeAppear_4(){
    document.getElementById("cube4").style.visibility = "visible";
    appearTimer4 = callDisappear(cubeDisappear_4); 
}
var appearTimer5;   function cubeAppear_5(){
    document.getElementById("cube5").style.visibility = "visible";
    appearTimer5 = callDisappear(cubeDisappear_5); 
}
var appearTimer6;   function cubeAppear_6(){
    document.getElementById("cube6").style.visibility = "visible";
    appearTimer6 = callDisappear(cubeDisappear_6); 
}
var appearTimer7;   function cubeAppear_7(){
    document.getElementById("cube7").style.visibility = "visible";
    appearTimer7 = callDisappear(cubeDisappear_7); 
}


//Click on a cube:
//  hide the cube
//  add point to #score_points
var points = 0;
function addPoints(){
    points += 1;
    document.getElementById("score_points").innerHTML = points;
}
document.getElementById("cube1").onclick = function (){         
    document.getElementById("cube1").style.visibility = "hidden";
    addPoints();    
}
document.getElementById("cube2").onclick = function (){        
    document.getElementById("cube2").style.visibility = "hidden";
    addPoints();    
}
document.getElementById("cube3").onclick = function (){        
    document.getElementById("cube3").style.visibility = "hidden";
    addPoints();    
}
document.getElementById("cube4").onclick = function (){        
    document.getElementById("cube4").style.visibility = "hidden";
    addPoints();    
}
document.getElementById("cube5").onclick = function (){        
    document.getElementById("cube5").style.visibility = "hidden";
    addPoints();    
}
document.getElementById("cube6").onclick = function (){        
    document.getElementById("cube6").style.visibility = "hidden";
    addPoints();    
}
document.getElementById("cube7").onclick = function (){        
    document.getElementById("cube7").style.visibility = "hidden";
    addPoints();    
}



/********************/
//#start Clicked
//  calls hideAndReset()
//  calls cubeAppear() which starts the game.
var startTimer;
document.getElementById("start").onclick = function(){
    hideAndReset();    
    
    var startTimeout = Math.random()*1000;        
    
    startTimer = setTimeout(cubeAppear_1, startTimeout);
    startTimer = setTimeout(cubeAppear_2, startTimeout);
    startTimer = setTimeout(cubeAppear_3, startTimeout);
    startTimer = setTimeout(cubeAppear_4, startTimeout);
    startTimer = setTimeout(cubeAppear_5, startTimeout);
    startTimer = setTimeout(cubeAppear_6, startTimeout);
    startTimer = setTimeout(cubeAppear_7, startTimeout);      
}
//First function called on #start is clicked on:
//  Hides all cubes
//  Clear score
//  Displays #stop div.
function hideAndReset(){  
    document.getElementById("cube1").style.visibility = "hidden";document.getElementById("cube2").style.visibility = "hidden";document.getElementById("cube3").style.visibility = "hidden";
    document.getElementById("cube4").style.visibility = "hidden";document.getElementById("cube5").style.visibility = "hidden";document.getElementById("cube6").style.visibility = "hidden";    
    document.getElementById("cube7").style.visibility = "hidden";     

    document.getElementById("score_points").innerHTML = "0";
    
    document.getElementById("game").style.display = "block";
    document.getElementById("startScreen").style.display = "none";
    

    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("stop").style.visibility = "visible";    
}
//#stop Clicked
//  Clears Timeouts
//  Display all cubes
//  Dispay #start and hide #stop
document.getElementById("stop").onclick = function(){
    document.getElementById("game").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
    
    points = 0;
    //startTimeout = 2000;    
    clearTimeout(startTimer);       
    clearTimeout(appearTimer1); clearTimeout(disappearTimer1);
    clearTimeout(appearTimer2); clearTimeout(disappearTimer2);
    clearTimeout(appearTimer3); clearTimeout(disappearTimer3);
    clearTimeout(appearTimer4); clearTimeout(disappearTimer4);
    clearTimeout(appearTimer5); clearTimeout(disappearTimer5);
    clearTimeout(appearTimer6); clearTimeout(disappearTimer6);
    clearTimeout(appearTimer7); clearTimeout(disappearTimer7);
    
    
    document.getElementById("cube1").style.visibility = "visible";document.getElementById("cube2").style.visibility = "visible";document.getElementById("cube3").style.visibility = "visible";
    document.getElementById("cube4").style.visibility = "visible";document.getElementById("cube5").style.visibility = "visible";document.getElementById("cube6").style.visibility = "visible";    
    document.getElementById("cube7").style.visibility = "visible";
    
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("stop").style.visibility = "hidden";
}