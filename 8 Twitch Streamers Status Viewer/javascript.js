$(document).ready(function (){        
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    const apiUrl = '';   

    $.ajax({
        url : apiUrl,
        method : 'GET',
        dataType: "jsonp",
        success : function (channel_info) { 
            //$('#quote').html(channel_info.quote),
            
        }   


    });//ajax END              
});//getJSON END
    
