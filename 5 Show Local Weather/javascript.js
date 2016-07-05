$(document).ready(function (){//make sure every HTML is loaded
    var lat, long, apiUrl;
    
    if(navigator.geolocation){      
        navigator.geolocation.getCurrentPosition(function(position){//gets coords
            lat = position.coords.latitude;
            long = position.coords.longitude;
            console.log(position);                               
        }); 
    }
    else alert('error');    
});




/*
http://codingpen.com/2016/02/03/a-simple-weather-application-with-jquery/


var appId = '8ae95a0698ced7693a3427c0a9ac10cd';	

http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8ae95a0698ced7693a3427c0a9ac10cd


api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}

JSON


https://openweathermap.org/current#geo
https://openweathermap.org/weather-conditions
*/