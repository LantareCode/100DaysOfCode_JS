$(document).ready(function (){        
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    var channel = 'sheevergaming';

    const apiUrl = 'https://api.twitch.tv/kraken/streams/'+channel+'?callback=?';   

    $.ajax({
        url : apiUrl,
        method : 'GET',
        dataType: "jsonp",
        success : function (channel_info) { 
            
            
            $('#name').html(channel);
            
            if(channel_info.stream === null)
                $('#status').html('offline');           
            else if(channel_info.stream === undefined)                
                $('#status').html('account closed');           
            else
                $('#status').html(channel_info.stream.game);  
            
            
            console.log(channel_info);
            //$('#quote').html(channel_info.quote),
            
        }   


    });//ajax END              
});//getJSON END
    
