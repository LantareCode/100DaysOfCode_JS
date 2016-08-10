var clicked;

window.onload = function(){
    var btnArr = document.getElementsByTagName("button");    
    for (var i = 0; i <= btnArr.length; i++) {
        btnArr[i].onclick = function(e) {
            clicked = this.id;
            alert(this.id);
        };
        /*var id = '#seven';
        $(id).click(function(){
            alert(this.id);
        });*/
    }  
}


//get the number button id and us in this function
$('#seven').click(function(){
    isZero();
    document.getElementById('inputField').value += document.getElementById('seven').value;
});



function isZero(){//clear the original 0 value when a number is pressed.    
    if(document.getElementById('inputField').value === '0')  
        document.getElementById('inputField').value = '';
}

