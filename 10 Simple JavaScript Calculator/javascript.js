var clickedButton;
window.onload = function(){    
    $('button').click(function(){        
        clickedButton = $(this).attr('id');  
        click();
    });    
}

function click(){
    console.log(clickedButton);//temp test
    
    if(clickedButton === 'clear')
        document.getElementById('inputField').value = '0';
    else if (clickedButton === 'div' || clickedButton === 'multi' || clickedButton === 'sub' || clickedButton === 'dot')
        document.getElementById('inputField').value += document.getElementById(clickedButton).value;
    else if (clickedButton === 'equal'){
        var equation = document.getElementById('inputField').value;
        var answer = eval(equation);
        
        if(Number.isNaN(answer))
            document.getElementById('inputField').value = 'Error';  
        else if(Number.isInteger(answer))//if it's an int don't round to two
            document.getElementById('inputField').value = answer;               
        else
            document.getElementById('inputField').value = answer.toFixed(2);
       
       
            
    }
    else{       
        isZero();//only clear the zero for numbers pressed
        document.getElementById('inputField').value += document.getElementById(clickedButton).value;
    }
        
}

function isZero(){//clear the original 0 value when a number is pressed.    
    if(document.getElementById('inputField').value === '0')  
        document.getElementById('inputField').value = '';
}

