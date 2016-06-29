//onClick
/*document.getElementById("box").onclick = function(){
    var box = document.getElementById("box");
    if(box.className == "left")
        box.className = "right";
    else
        box.className = "left";
}*/

//addEventListener
var box = document.getElementById('box');

window.addEventListener('click', toggle);

function toggle() {
  if (box.className == 'left') box.className = 'right';
  else box.className = 'left';
}