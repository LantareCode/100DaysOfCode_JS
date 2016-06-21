setTimeout(displayBlock1,500);
//--Display--
function displayBlock1(){
    document.getElementById("cube1").style.opacity = "1";  
    setTimeout(displayBlock2,500);
}
function displayBlock2(){
    document.getElementById("cube2").style.opacity = "1";  
    setTimeout(displayBlock3,500);
}
function displayBlock3(){
    document.getElementById("cube3").style.opacity = "1";  
    setTimeout(displayBlock4,500);
}
function displayBlock4(){
    document.getElementById("cube4").style.opacity = "1";  
    setTimeout(displayBlock5,500);
}
function displayBlock5(){
    document.getElementById("cube5").style.opacity = "1";  
    setTimeout(displayBlock6,500);
}
function displayBlock6(){
    document.getElementById("cube6").style.opacity = "1";  
    setTimeout(displayBlock7,500);
}
function displayBlock7(){
    document.getElementById("cube7").style.opacity = "1";  
    setTimeout(hideBlock1,500);
}
//--Hide--
function hideBlock1(){
    document.getElementById("cube1").style.opacity = "0";  
    setTimeout(hideBlock2,500);
}
function hideBlock2(){
    document.getElementById("cube2").style.opacity = "0";  
    setTimeout(hideBlock3,500);
}
function hideBlock3(){
    document.getElementById("cube3").style.opacity = "0";  
    setTimeout(hideBlock4,500);
}
function hideBlock4(){
    document.getElementById("cube4").style.opacity = "0";  
    setTimeout(hideBlock5,500);
}
function hideBlock5(){
    document.getElementById("cube5").style.opacity = "0";  
    setTimeout(hideBlock6,500);
}
function hideBlock6(){
    document.getElementById("cube6").style.opacity = "0";  
    setTimeout(hideBlock7,500);
}
function hideBlock7(){
    document.getElementById("cube7").style.opacity = "0";  
    setTimeout(displayBlock1,500);
}






