$(document).ready(function (){//make sure every HTML is loaded
    var lat, long, unit, apiUrl, celsius, fahrenheit;
    
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
                    celsius = geoWeather.main.temp;
                    
                    $('#icon').attr('src',icon);                    
                    $('#city').html(geoWeather.name),
                    $('#country').html(geoWeather.sys.country),
                    $('#temperature').html(celsius),
                    $('#sky').html(geoWeather.weather[0].main);  
                    
                    
                    $('#unit').on('click', function(){//Click on unit.
                        if($('#unit').text() == 'C'){                                                        
                            fahrenheit = round(((celsius*1.8)+32), 1);
                            $('#temperature').html(fahrenheit);
                            $('#unit').html('F');                            
                        }
                        else{
                            celsius = round(((fahrenheit-32)*.5556), 1);
                            $('#temperature').html(celsius);
                            $('#unit').html('C'); 
                        }
                       
                    });
                }
            });
        }); 
    }
    else{alert('error');}  
    
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
});