$(document).ready(function (){        
    const apiUrl_popular = 'http://quotes.stormconsultancy.co.uk/popular.json';   
    
    $.ajax({
        url : apiUrl_popular,
        method : 'GET',
        dataType: "jsonp",
        success : function (prog_quotes) {             
            
            newQuote();
            
            function newQuote(){
                let items = prog_quotes.length;
                let randomQuote = Math.round(Math.random()*items);
                $('#quote').html('“' + prog_quotes[randomQuote].quote + '”'),
                $('#author').html('- ' + prog_quotes[randomQuote].author);
            }
            
            $('#newQuote').on('click', function(){
                newQuote();
            });     
            
            $('#twitter').on('click', function(){
                let quote = document.getElementById('quote').innerHTML;
                let author = document.getElementById('author').innerHTML;
                
                let twitter_text = 'https://twitter.com/intent/tweet?hashtags=ProgrammingQuotes&text=' +  quote + author;
                
                $('#tweet').attr('href',twitter_text);    
            });
        }
    });
         
    
});

