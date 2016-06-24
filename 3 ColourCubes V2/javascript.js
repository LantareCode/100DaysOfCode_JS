//#start Clicked
//  calls hideAndReset()
//  calls cubeAppear() which starts the game.
var startTimer;
document.getElementById("start").onclick = function(){
    hideAndReset();
    startTimer = setTimeout(cubeAppear, Math.random()*2000);
}

//cubeAppear function:
//  Makes cubes appear at random times
//  Calls disappearTimer function at a random time.
var appearTimer;
function cubeAppear(){
    document.getElementById("cube1").style.visibility = "visible";
    appearTimer = setTimeout(cubeDisappear, Math.random()*2000);

}

//cubeDisappear function:
//  Makes cubes disappear at random times
//  Calls cubeAppear function at a random time.
var disappearTimer;
function cubeDisappear(){
    document.getElementById("cube1").style.visibility = "hidden";
    disappearTimer = setTimeout(cubeAppear, ((Math.random()*5000) + 2000));
}
























//First function called on #start is clicked on:
//  Hides all cubes
//  Clear score
//  Displays #stop div.
function hideAndReset(){
    document.getElementById("cube1").style.visibility = "hidden";document.getElementById("cube2").style.visibility = "hidden";document.getElementById("cube3").style.visibility = "hidden";
    document.getElementById("cube4").style.visibility = "hidden";document.getElementById("cube5").style.visibility = "hidden";document.getElementById("cube6").style.visibility = "hidden";    
    document.getElementById("cube7").style.visibility = "hidden";     

    document.getElementById("score_points").innerHTML = "0000000";

    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("stop").style.visibility = "visible";    
}
//#stop Clicked
//  Clears Timeouts
//  Display all cubes
//  Dispay #start and hide #stop
document.getElementById("stop").onclick = function(){
    clearTimeout(startTimer);
    clearTimeout(appearTimer);
    clearTimeout(disappearTimer);    
    
    document.getElementById("cube1").style.visibility = "visible";document.getElementById("cube2").style.visibility = "visible";document.getElementById("cube3").style.visibility = "visible";
    document.getElementById("cube4").style.visibility = "visible";document.getElementById("cube5").style.visibility = "visible";document.getElementById("cube6").style.visibility = "visible";    
    document.getElementById("cube7").style.visibility = "visible";
    
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("stop").style.visibility = "hidden";
}