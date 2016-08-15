var clickedButton, equationDone = false;
window.onload = function(){    
    $('button').click(function(){        
        clickedButton = $(this).attr('id');  
        click();
    });    
}

function click(){
    if(clickedButton === 'clear')
        document.getElementById('inputField').innerHTML = '0';
    else if (clickedButton === 'divi' || clickedButton === 'multi' || clickedButton === 'sub' || clickedButton === 'dot' || clickedButton === 'add'){ 
        if(document.getElementById('inputField').innerHTML === 'Error')
            clear();
        document.getElementById('inputField').innerHTML += document.getElementById(clickedButton).innerHTML;
        equationDone = false;
    }    
    else if (clickedButton === 'equal'){        
        var equation = document.getElementById('inputField').innerHTML;        
        var answer;
        
        try {
            eval(equation); 
            answer = eval(equation);
        } catch (e) {
            if (e instanceof SyntaxError) {
                document.getElementById('inputField').innerHTML = 'Error';
            }
        }       
        
        if(answer == 'Infinity')
            document.getElementById('inputField').innerHTML = 'Error';  
        else if(Number.isInteger(answer))//if it's an int don't round to two
            document.getElementById('inputField').innerHTML = answer;               
        else
            document.getElementById('inputField').innerHTML = answer.toFixed(2);   
        
        equationDone = true;
    }
    else{       
        clear();
        document.getElementById('inputField').innerHTML += document.getElementById(clickedButton).innerHTML;        
    }        
}

function clear(){    
    if(document.getElementById('inputField').innerHTML === '0' || equationDone === true || document.getElementById('inputField').innerHTML === 'Error')  
        document.getElementById('inputField').innerHTML = '';
    
    equationDone = false;
}
