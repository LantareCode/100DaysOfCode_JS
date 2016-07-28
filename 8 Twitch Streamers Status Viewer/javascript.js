$(document).ready(function (){       
    
    var channels = ['automateallthethings', 'freecodecamp','RobotCaleb', 'noobs2ninjas', 'romoncoke', 'woodenpotatoes', 'quin69', 'frinlet', 'comster404'];
    
    channels.forEach(function(channel_name){//Loop through channels             
        var channel = channel_name; 

        const channels_API = 'https://api.twitch.tv/kraken/channels/'+channel+'?callback=?';           
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

                    var logo_html,name_html,status_html,border_css='grey';

                    var link = channel_info.url; 

                    //For all: Display Logo and name:
                    if(channel_info.logo === null || status === 'closed')    
                        logo_html = 'http://dummyimage.com/100/B3B6BF/000.jpg/&text=0x3F';
                    else
                        logo_html = channel_info.logo;  

                    if(status !== 'closed')
                        name_html = '<a href="' + link + '" target="_blank">' + channel_info.display_name + '</a>';
                    else
                        name_html = channel;   

                    //Display based on online or offline or closed.
                    if(status === 'offline')                    
                        status_html = 'offline';
                    else if(status === 'closed'){                    
                        status_html = 'account closed';
                    }
                    else{//if online
                        var gameinfo = channel_info.game + ': ' + channel_info.status;                                        
                        status_html = '<a href="' + link + '" target="_blank">' + gameinfo + '</a>';
                        border_css = 'green';
                    }

                    var html =  '<div class="display" style="border-color:' + border_css + '">' + 
                                '<p class="logo"> <img src="' + logo_html + ' " width="150px" style="border:3px solid ' + border_css + ';"></p>' +
                                '<p class="name">' + name_html + '</p>' + 
                                '<p class="status">' + status_html + '</p>' +
                                '</div>';                
                    status === 'online' ? $('.wrap').prepend(html) : $('.wrap').append(html);
                }//success end
            });//ajax DISPLAY END            
        }//displayInfo END        
    });//end forEach Loop
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
