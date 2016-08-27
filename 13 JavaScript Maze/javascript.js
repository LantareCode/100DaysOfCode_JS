/*
Saw a one-line Commodore 64 BASIC program that generates a maze using the characters / and \

The original code is: 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
*/

window.onload = function() {    
    var rand, character; 
    
    for(var i = 0; i < 980; i++){
        rand = Math.floor(Math.random()*2)+1;
        
        if(rand === 1)
            character = '/';
        else 
            character = '\\';
        
            
        document.getElementById('print').innerHTML += character;
    }
}//onload end