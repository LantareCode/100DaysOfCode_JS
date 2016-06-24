//document.getElementById("cube1").style.display = "none";


//document.getElementById("cube1").style.visibility = "visible";
//document.getElementById("cube1").style.visibility = "hidden";

document.getElementById("start").onclick = function(){
    hideAndReset();
    
    
    
    
    
    
    
    
    
}




function hideAndReset(){
    document.getElementById("cube1").style.visibility = "hidden";document.getElementById("cube2").style.visibility = "hidden";document.getElementById("cube3").style.visibility = "hidden";
    document.getElementById("cube4").style.visibility = "hidden";document.getElementById("cube5").style.visibility = "hidden";document.getElementById("cube6").style.visibility = "hidden";    
    document.getElementById("cube7").style.visibility = "hidden"; 
    
    //TO DO - Change start to stop.
    document.getElementById("start").innerHTML = "S T O P";
    //TO DO - Reset score to 0000000
}