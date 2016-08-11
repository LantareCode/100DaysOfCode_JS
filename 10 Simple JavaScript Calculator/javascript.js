var clickedButton;

window.onload = function(){
    
    $('button').click(function(){        
        clickedButton = $(this).attr('id');  
        click();
    });
    
}


function click(){
    console.log(clickedButton);//temp test
    
    isZero();    
    document.getElementById('inputField').value += document.getElementById(clickedButton).value;
}
function isZero(){//clear the original 0 value when a number is pressed.    
    if(document.getElementById('inputField').value === '0')  
        document.getElementById('inputField').value = '';
}

