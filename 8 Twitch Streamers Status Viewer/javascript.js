$(document).ready(function (){        
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","comster404"];
    
    var channel = 'storbeck';//temp

    //Use channels to get info an logos
        const channels_API = 'https://api.twitch.tv/kraken/channels/'+channel+'?callback=?';       
    //streams to test if online.
        const streams_API = 'https://api.twitch.tv/kraken/streams/'+channel+'?callback=?';
    
    var status = '';

    $.ajax({//Test if a channel is online, offline or channel closed.        
        url : streams_API,
        method : 'GET',
        dataType: 'jsonp',
        success : function (stream_info) {                         
            
            
            if(stream_info.stream === null)
                displayInfo('offline');           
            else if(stream_info.stream === undefined)                
                displayInfo('closed');
            else
                displayInfo('online');       
            
            //console.log(stream_info);
        }  
    });//ajax END              
    
    //Display channel info
    function displayInfo(status){               
     
        $.ajax({//DISPLAY
            url : channels_API,
            method : 'GET',
            dataType: 'jsonp',
            success : function (channel_info) {
                console.log(channel_info);
                                
                var link = channel_info.url; 
                
                //For all: Display Logo and name:
                if(channel_info.logo === null || status === 'closed')                    
                    $('#logo').html('<img src="http://dummyimage.com/100/B3B6BF/000.jpg/&text=0x3F" width="100px">');
                else
                    $('#logo').html('<img src=' + channel_info.logo + ' width="100px">');
                
                if(status !== 'closed')
                    $('#name').html('<a href="' + link + '" target="_blank">' + channel_info.display_name + '</a>');   
                else
                    $('#name').html(channel);
                 
                
                               
                
                //Display based on online or offline or closed.
                if(status === 'offline')                    
                    $('#status').html('offline');                
                else if(status === 'closed'){                    
                    $('#status').html('account closed'); 
                }
                else{//if online
                    var gameinfo = channel_info.game + ': ' + channel_info.status;                                        
                    $('#status').html('<a href="' + link + '" target="_blank">' + gameinfo + '</a>');
                }
            }//success end
        });//ajax DISPLAY END*/
    }
    
});//getJSON END
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
