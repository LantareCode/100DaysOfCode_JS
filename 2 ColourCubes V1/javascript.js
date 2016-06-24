var time = 300;
setTimeout(displayBlock1,time);
//--Display--
function displayBlock1(){
    document.getElementById("cube1").style.opacity = "1";  
    setTimeout(displayBlock2,time);
}
function displayBlock2(){
    document.getElementById("cube2").style.opacity = "1";  
    setTimeout(displayBlock3,time);
}
function displayBlock3(){
    document.getElementById("cube3").style.opacity = "1";  
    setTimeout(displayBlock4,time);
}
function displayBlock4(){
    document.getElementById("cube4").style.opacity = "1";  
    setTimeout(displayBlock5,time);
}
function displayBlock5(){
    document.getElementById("cube5").style.opacity = "1";  
    setTimeout(displayBlock6,time);
}
function displayBlock6(){
    document.getElementById("cube6").style.opacity = "1";  
    setTimeout(displayBlock7,time);
}
function displayBlock7(){
    document.getElementById("cube7").style.opacity = "1";  
    setTimeout(hideBlock1,time);
}
//--Hide--
function hideBlock1(){
    document.getElementById("cube1").style.opacity = "0";  
    setTimeout(hideBlock2,time);
}
function hideBlock2(){
    document.getElementById("cube2").style.opacity = "0";  
    setTimeout(hideBlock3,time);
}
function hideBlock3(){
    document.getElementById("cube3").style.opacity = "0";  
    setTimeout(hideBlock4,time);
}
function hideBlock4(){
    document.getElementById("cube4").style.opacity = "0";  
    setTimeout(hideBlock5,time);
}
function hideBlock5(){
    document.getElementById("cube5").style.opacity = "0";  
    setTimeout(hideBlock6,time);
}
function hideBlock6(){
    document.getElementById("cube6").style.opacity = "0";  
    setTimeout(hideBlock7,time);
}
function hideBlock7(){
    document.getElementById("cube7").style.opacity = "0";  
    setTimeout(displayBlock1,time);
}






