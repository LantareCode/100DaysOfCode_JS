$(document).ready(function (){        
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    var channel = 'freecodecamp';

    const channels_API = 'https://api.twitch.tv/kraken/channels/'+channel+'?callback=?';   
    /*Use channels to get info an logos*/
    const streams_API = 'https://api.twitch.tv/kraken/streams/'+channel+'?callback=?';   
    /*streams to test if online.*/

    $.ajax({
        url : streams_API,
        method : 'GET',
        dataType: 'jsonp',
        success : function (channel_info) { 
            
            
            $('#name').html(channel);
            
            if(channel_info.stream === null)
                $('#status').html('offline');           
            else if(channel_info.stream === undefined)                
                $('#status').html('account closed');           
            else
                $('#status').html(channel_info.stream.channel.status);
                //$('#status').html(channel_info._links.channel); //LINK
            
            //$('#logo').html('<img src=' + channel_info.stream.channel.logo + ' width="100px">');
            
            console.log(channel_info);
            //$('#quote').html(channel_info.quote),
            
        }   


    });//ajax END              
});//getJSON END
    
