$(document).ready(function (){//make sure every HTML is loaded
    var lat, long, unit, apiUrl;
    
    if(navigator.geolocation){      
        navigator.geolocation.getCurrentPosition(function(position){//gets coords
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            unit = 'metric';//change unit to metric or imperial
            
            console.log('lat = ' + lat);
            console.log('lon = ' + lon);
            console.log(position);  
                     
            apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
                  lat + '&lon=' + 
                  lon + '&units=' +
                  unit + '&appid=8ae95a0698ced7693a3427c0a9ac10cd';
            console.log(apiUrl);            
            
            $.ajax({
                url : apiUrl,
                method : 'GET',//Get is used to get data from server, POST is used to modify data on server
                success : function (geoWeather) {  
                    var icon = 'http://openweathermap.org/img/w/' + geoWeather.weather[0].icon + '.png';//Gets our icon call.
                    $('#icon').attr('src',icon);
                    
                    $('#city').html(geoWeather.name),
                    $('#country').html(geoWeather.sys.country),
                    $('#temperature').html(geoWeather.main.temp),
                    $('#sky').html(geoWeather.weather[0].main);                    
                }
            });
        }); 
    }
    else alert('error');    
});