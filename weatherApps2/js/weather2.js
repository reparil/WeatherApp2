/* data link
/searching by city name
"http://api.openweathermap.org/data/2.5/weather?lat=49.422332&lon=20.0332132&APPID=c46a632da27f87f7efe0ff1745ef7149"
"http://api.openweathermap.org/data/2.5/weather?q="+input+"&APPID="+id+""
/searching by coords
"http://api.openweathermap.org/data/2.5/weather?lat="+lat +"&lon="+long+"&APPID="+id+""*/
    
/*google maps API key AIzaSyCRPpawKlCWrn_MMgvy6plcJFKq9HdZCWs*/


var lat,long,latDisp,longDisp,
    weatherData, json,
    cityName,
    temp,tempC,tempArr,
    currentConditions,icon,backGroudImage,
    date,dateArr,dayArr,descriptionArr
    
var input = document.querySelector("input").value;

var id = "c46a632da27f87f7efe0ff1745ef7149";

var days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

var months = [ "STY", "LUT", "MAR", "KWI", "MAJ", "CZE", "LIP", "SIE", "WRZ", "PAŹ", "LIS", "GRU"];

var urls = [
    {
  name: "currentByCoords",
  url:  "http://api.openweathermap.org/data/2.5/weather?lat="+lat +"&lon="+long+"&APPID="+id+""
    },
    {
  name: "hourlyByCoords",
  url: "http://api.openweathermap.org/data/2.5/forecast?lat="+lat +"&lon="+long+"&APPID="+id+"&units=metric&cnt=12"
    },
    {
  name: "dailyByCoords",
  url:  "http://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat +"&lon="+long+"&APPID="+id+"&units=metric&cnt=6&lang=pl"
    },
    {
  name: "currentByInput",
  url:  "http://api.openweathermap.org/data/2.5/weather?q="+input+"&APPID="+id+"&units=metric"
    },
    {
  name: "hourlyByInput",
  url: "http://api.openweathermap.org/data/2.5/forecast?q="+input+"&APPID="+id+"&units=metric&cnt=12"
    },
    {
  name: "dailyByInput",
  url: "http://api.openweathermap.org/data/2.5/forecast/daily?q="+input+"&APPID="+id+"&units=metric&cnt=6&lang=pl"
    }
];

    
            
            

var conditions = [
    {
    "description": "bezchmurne niebo",
    "backgrounds": 'img/backgrounds/clear-sky.jpg',
    "icon": "img/icons/png/sunny.png"    
    },
    {
    "description": "pochmurnie",
    "backgrounds": 'img/backgrounds/few-clouds.jpg',
    "icon": "img/icons/png/003-cloudy-4.png"    
    },
    {
    "description": "lekki deszcz",
    "backgrounds": 'img/backgrounds/shower-rain.jpeg',
    "icon": "img/icons/png/038-rain-1.png"    
    },
    {
    "description": "deszczowo",
    "backgrounds": 'img/backgrounds/rain.jpg',
    "icon": "img/icons/png/040-rain.png"    
    },
    {
    "description": "burze",
    "backgrounds": 'img/backgrounds/thunderstorm.jpg',
    "icon": "img/icons/png/041-storm.png"    
    },
    {
    "description": "opady śniegu",
    "backgrounds": 'img/backgrounds/snow.jpg',
    "icon": "img/icons/png/008-snow-1.png"    
    },
    {
    "description": "mgła",
    "backgrounds": 'img/backgrounds/mist.jpg',
    "icon": "img/icons/png/015-clouds-3.png"    
    }   
];


function switchWeather (){
    switch (condition) {
    case 'clear':
        icon = conditions[0].icon ;
        description = conditions[0].description;
        backGroudImage = conditions[0].backgrounds;
        break;
    case 'clouds':
        icon = conditions[1].icon ;
        description = conditions[1].description;1
        backGroudImage = conditions[1].backgrounds;
        break;
    case 'drizzle':
        icon = conditions[2].icon ;
        description = conditions[2].description
        backGroudImage = conditions[2].backgrounds;
        break;
    case 'rain':
        icon = conditions[3].icon ;
        description = conditions[3].description;
        backGroudImage = conditions[3].backgrounds;
        break;
    case 'thunderstorm':
        icon = conditions[4].icon ;
        description = conditions[4].description;
        backGroudImage = conditions[4].backgrounds;
        break;
    case 'snow':
        icon = conditions[5].icon ;
        description = conditions[5].description;
        backGroudImage = conditions[5].backgrounds;
        break;6
    case 'atmosphere':
        icon = conditions[6].icon ;
        description = conditions[6].description;
        backGroudImage = conditions[6].backgrounds;
        break;
             
}
};

getWeather();   



function getWeather(){ 

function getLocation(){
if (navigator.geolocation){
    
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            latDisp = (Math.round(lat*1000))/1000;
            longDisp = (Math.round(long*1000))/1000;

            

             urls = [
    {
  name: "currentByCoords",
  url:  "http://api.openweathermap.org/data/2.5/weather?lat="+lat +"&lon="+long+"&APPID="+id+"&units=metric&lang=pl"
    },
    {
  name: "hourlyByCoords",
  url: "http://api.openweathermap.org/data/2.5/forecast?lat="+lat +"&lon="+long+"&APPID="+id+"&units=metric&cnt=12"
    },
    {
  name: "dailyByCoords",
  url:"http://api.openweathermap.org/data/2.5/forecast/daily?lat="+lat +"&lon="+long+"&APPID="+id+"&units=metric&cnt=9&lang=pl"
    },
    {
  name: "currentByInput",
  url:  "http://api.openweathermap.org/data/2.5/weather?q="+input+"&APPID="+id+""
    },
    {
  name: "hourlyByInput",
  url: "http://api.openweathermap.org/data/2.5/forecast?q="+input+"&APPID="+id+"&units=metric&cnt=12"
    },
    {
  name: "dailyByInput",
  url: "http://api.openweathermap.org/data/2.5/forecast/daily?q="+input+"&APPID="+id+"&units=metric&cnt=5&lang={pl}"
    }
];

    /*tutaj funckje do wywołania*/
     currentByCoords();
     hourlyByCoords();
     dailyByCoords();
     findByInput();
     initMap();
    
             });
        };
    
   
};

getLocation();

};
/*Current weather function, searchig by coords */
function currentByCoords(){
   $.getJSON(urls[0].url,function(json){
       
       console.log(urls[0].name);
       console.log(json);
       /*Name of current location*/
       cityName = json.name;
       document.querySelector("#location").textContent = cityName;
       /*Current conditions*/
       condition = json.weather[0].main.toLowerCase();
       /*Change background according to current weather*/
        switchWeather();
        $("body").css({"background-image": "url(" + backGroudImage + ")"});
       /*Change icon*/
        document.querySelector(".current-weather-img img").setAttribute("src", icon);
        /*Current temperature*/
        var nowTemp = (Math.round(json.main.temp*10))/10 + "&#186 C";
        document.querySelector(".temp-current").innerHTML = nowTemp;
       /*Weather description*/
       document.querySelector(".current-description").textContent = json.weather[0].description;
       /*Wind*/
       document.querySelector(".current-wind").textContent = json.wind.speed + " m/s";
       /*Pressure*/
       document.querySelector(".current-pressure").textContent = json.main.pressure + " hPa";
       /*Cloudiness*/
       document.querySelector(".current-cloudness").textContent = json.clouds.all + " %";
       /*Humidity*/
       document.querySelector(".current-humidity").textContent = json.main.humidity + " %";
    
   });
};

/*Current weather function, searchig by coords */

 /*Hourly weather function, searchig by coords */
var hourArr = document.querySelectorAll(".hour");
var hourIconArr = document.querySelectorAll(".hour-img img");
var hourTempArr = document.querySelectorAll(".hour-temp");

function hourlyByCoords(){
  
 
  $.getJSON(urls[1].url,function(json){
       console.log("godzinowo"); 
       console.log(json); 
      
      for ( var i = 0; i < 12 ; i++){
       /*set hour*/   
      var hour = new Date(json.list[i].dt_txt);   
      var getHour = hour.getHours();
     
      hourArr[i].textContent = getHour + ":00";
      /*Hourly conditions*/
      condition = json.list[i].weather[0].main.toLowerCase();
      switchWeather();
      hourIconArr[i].setAttribute("src", icon);
      /*Hourly temperature*/     
      var hourTemp = Math.round(json.list[i].main.temp) + "&#186 C";
      hourTempArr[i].innerHTML = hourTemp;
          
         
      
      }
     
    });
};
/*Hourly weather function, searchig by coords */
    
    
    
    
    


function dailyByCoords(){                                       
$.getJSON(urls[2].url,function(json){
        console.log("pogoda na dni");
        console.log(json);
        date = json.list[0].dt; 
        var d = new Date();
        var t = new Date(d.getTime()+1000*60*60*24);
        console.log(t);
        
        var day = d.getDay();
        
        var day_number = d.getDate();
        var month_number = d.getMonth() + 1;
        
        var day_name = days[day];
        
        
        $(".date").text(day_number + "." + month_number);
        $(".day").text(day_name);
       
        cityName = json.city.name;
        $("#location").text(cityName);
        temp = json.list[0].temp.day
        
        tempCround = (Math.round(temp*10))/10;
        $("#current-temp").html(tempCround + " &#186 C");
    
        
        /*temperature */
        dayTempArr = document.querySelectorAll(".temp-day"); 
        nightTempArr = document.querySelectorAll(".temp-night");
        /*temperature*/
        /*date*/
        dateArr = document.querySelectorAll(".date");
        dayArr = document.querySelectorAll(".day");
        /*date*/
    
        /*description */
        descriptionArr = document.querySelectorAll(".forecast-description");
        /*description */
        
        /*icon daily forecast*/
        var dailyIcon = document.querySelectorAll(".daily-icon");
        /*icon daily forecast*/
    
        
        for ( var i = 0; i < 6 ; i++){
            /*temperature*/
            tempDay = json.list[i].temp.max;
            tempNight = json.list[i].temp.min;
            $(dayTempArr[i]).html(Math.round(tempDay) + " &#186 C" + '<img src="img/icons/png/050-sun.png" alt="">');
            $(nightTempArr[i]).html(Math.round(tempNight) + " &#186 C" + '<img src="img/icons/png/028-moon-2.png" alt="">');
            /*temperature*/
            
            /*date*/
            var dateCalc = new Date(d.getTime()+(1000*60*60*24*i));
            var numberOfday =dateCalc.getDate()+1;
            var numberOfmonth = dateCalc.getMonth();
            var nameOfmonth = months[numberOfmonth];
            $(dateArr[i]).text(numberOfday + " " + nameOfmonth);
            /*date*/
            
            /*day of the week*/
            var dayCalc = day+1 + i;
            var dayNum = dayCalc;
            if (dayCalc > 6){
                dayNum = i;
            } 
            var dayName = days[dayNum];
            $(dayArr[i]).text(dayName);
            
            /*day of the week*/
            
            /*condition description and change of icon*/
            condition = json.list[i].weather[0].main.toLowerCase();
            
            descriptionArr[i].textContent = json.list[i].weather[0].description;
            
            
            switchWeather();
            dailyIcon[i].setAttribute("src", icon);
            /*condition description and change of icon*/
    
            }
        });
    };

        

       
       

  
    
            
    function findByInput(){
    
        $("button").on("click", function(e){
       input = document.querySelector("input").value;
            console.log(input);

   /*problem z pobraniem urla z obkiertu url, input definiowany przed wprowadzeniem, jest pusty, i takie url jest pobierany do funkcji*/
    function  currentByInput(){       
   /*poprawić funkcje mpay, musi pobierac nowe coordynaty */        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+input+"&APPID="+id+"&units=metric&lang=pl",function(json){
       
        console.log(urls[3].name);
       console.log(json.name);
       console.log(json);
       /*Name of current location*/
       cityName = json.name;
       document.querySelector("#location").textContent = cityName;
       /*Current conditions*/
       condition = json.weather[0].main.toLowerCase();
       /*Change background according to current weather*/
        switchWeather();
        $("body").css({"background-image": "url(" + backGroudImage + ")"});
       /*Change icon*/
        document.querySelector(".current-weather-img img").setAttribute("src", icon);
        /*Current temperature*/
        var nowTemp = (Math.round(json.main.temp*10))/10 + "&#186 C";
        document.querySelector(".temp-current").innerHTML = nowTemp;
       /*Weather description*/
       document.querySelector(".current-description").textContent = json.weather[0].description;
       /*Wind*/
       document.querySelector(".current-wind").textContent = json.wind.speed + " m/s";
       /*Pressure*/
       document.querySelector(".current-pressure").textContent = json.main.pressure + " hPa";
       /*Cloudiness*/
       document.querySelector(".current-cloudness").textContent = json.clouds.all + " %";
       /*Humidity*/
       document.querySelector(".current-humidity").textContent = json.main.humidity + " %";
       
       /*MAP OF CURRENT SEARCHING*/
        var searchLat = json.coord.lat;
        var searchLon = json.coord.lon;
        function initMap() {
        console.log("Maps ok")
        var pos = {lat: searchLat, lng: searchLon};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: pos
        });
        var icon = {
            url: "img/icons/png/016-bolt.png", 
            scaledSize: new google.maps.Size(50, 50), 
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0, 0) 
        };
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: icon,
          
        });
      };
    initMap();
    
        
        });
       
    }
    function hourlyByInput(){
  
 
  $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q="+input+"&APPID="+id+"&units=metric&cnt=12",function(json){
       console.log("godzinowo"); 
       console.log(json); 
      
      for ( var i = 0; i < 12 ; i++){
       /*set hour*/   
      var hour = new Date(json.list[i].dt_txt);   
      var getHour = hour.getHours();
     
      hourArr[i].textContent = getHour + ":00";
      /*Hourly conditions*/
      condition = json.list[i].weather[0].main.toLowerCase();
      switchWeather();
      hourIconArr[i].setAttribute("src", icon);
      /*Hourly temperature*/     
      var hourTemp = Math.round(json.list[i].main.temp) + "&#186 C";
      hourTempArr[i].innerHTML = hourTemp;
          
         
      
      }
     
    });
};
            
function dailyByInput(){                                       
$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q="+input+"&APPID="+id+"&units=metric&cnt=6&lang=pl",function(json){
        console.log("pogoda na dni");
        console.log(json);
        date = json.list[0].dt; 
        var d = new Date();
        var t = new Date(d.getTime()+1000*60*60*24);
        console.log(t);
        
        var day = d.getDay();
        
        var day_number = d.getDate();
        var month_number = d.getMonth() + 1;
        
        var day_name = days[day];
        
        
        $(".date").text(day_number + "." + month_number);
        $(".day").text(day_name);
       
        cityName = json.city.name;
        $("#location").text(cityName);
        temp = json.list[0].temp.day
        
        tempCround = (Math.round(temp*10))/10;
        $("#current-temp").html(tempCround + " &#186 C");
    
        
        /*temperature */
        dayTempArr = document.querySelectorAll(".temp-day"); 
        nightTempArr = document.querySelectorAll(".temp-night");
        /*temperature*/
        /*date*/
        dateArr = document.querySelectorAll(".date");
        dayArr = document.querySelectorAll(".day");
        /*date*/
    
        /*description */
        descriptionArr = document.querySelectorAll(".forecast-description");
        /*description */
        
        /*icon daily forecast*/
        var dailyIcon = document.querySelectorAll(".daily-icon");
        /*icon daily forecast*/
    
        
        for ( var i = 0; i < 6 ; i++){
            /*temperature*/
            tempDay = json.list[i].temp.max;
            tempNight = json.list[i].temp.min;
            $(dayTempArr[i]).html(Math.round(tempDay) + " &#186 C" + '<img src="img/icons/png/050-sun.png" alt="">');
            $(nightTempArr[i]).html(Math.round(tempNight) + " &#186 C" + '<img src="img/icons/png/028-moon-2.png" alt="">');
            /*temperature*/
            
            /*date*/
            var dateCalc = new Date(d.getTime()+(1000*60*60*24*i));
            var numberOfday =dateCalc.getDate()+1;
            var numberOfmonth = dateCalc.getMonth();
            var nameOfmonth = months[numberOfmonth];
            $(dateArr[i]).text(numberOfday + " " + nameOfmonth);
            /*date*/
            
            /*day of the week*/
            var dayCalc = day+1 + i;
            var dayNum = dayCalc;
            if (dayCalc > 6){
                dayNum = i;
            } 
            var dayName = days[dayNum];
            $(dayArr[i]).text(dayName);
            
            /*day of the week*/
            
            /*condition description and change of icon*/
            condition = json.list[i].weather[0].main.toLowerCase();
            descriptionArr[i].textContent = json.list[i].weather[0].description;
            
            
            switchWeather();
            dailyIcon[i].setAttribute("src", icon);
            /*condition description and change of icon*/
    
            }
        });
    };
    currentByInput();
    hourlyByInput();
    dailyByInput();
    
    
        });
                  
}
      

           
 
/*map function*/
function initMap() {
    console.log("Maps ok")
        var pos = {lat: lat, lng: long};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: pos
        });
        var icon = {
            url: "img/icons/png/016-bolt.png", 
            scaledSize: new google.maps.Size(70, 70), 
            origin: new google.maps.Point(0,0),
            anchor: new google.maps.Point(0, 0) 
        };
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          icon: icon,
          
        });
      };
/*map function*/



