/*
Saw a one-line Commodore 64 BASIC program that generates a maze using the characters ╱ and ╲
The original code is: 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
*/
var firstLine, secondLine;
var i = 0;
var j = 0;
var mazeNum = 1800;

window.onload = function() {  
    firstLine = '10 PRINT CHR$(205.5 + RND(i)); : GOTO 10'.split('');
    secondLine = 'RUN'.split('');
    
    setTimeout(printFirst,50); 
}


//maze function generates the maze, the other two functions are just to make the text above everything print with a delay.
function maze(){    
    ((Math.floor(Math.random()*2)+1) === 1)? document.getElementById('print').innerHTML += '╱' : document.getElementById('print').innerHTML += '╲';      
    
    mazeNum--;      
    if(mazeNum >= 0)
       setTimeout(maze, 1); 
}



function printFirst(){            
    document.getElementById('print').innerHTML += firstLine[i];   
    
    i++;
    if(i < firstLine.length)
       setTimeout(printFirst, 50); 
    else{
        document.getElementById('print').innerHTML += '<br/>';
        setTimeout(printSecond,50);
    }
}


function printSecond(){
     document.getElementById('print').innerHTML += secondLine[j];   
    
    j++;
    if(j < secondLine.length)
       setTimeout(printSecond, 50); 
    else{
        document.getElementById('print').innerHTML += '<br/>';
        setTimeout(maze, 10); 
    }
}















































