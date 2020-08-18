// api key : 579ddbcac5d822363fefc097a8aa88e2

// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// App data
const weather = {};

weather.temperature = {
    unit : "fahrenheit"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "579ddbcac5d822363fefc097a8aa88e2";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
           // weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            //DISPLAY ON fahrenheit //(296K − 273.15) × 9/5 + 32 = 73.13°F
            weather.temperature.value = Math.floor((data.main.temp - KELVIN) * 9/5 + 32 );
        
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
    descElement.innerHTML = weather.description.toProperCase();
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// F to C conversion
function FahrenheitToCelcius(temperature){
    return (temperature - 32) * 5/9;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "fahrenheit"){
        let celcius = FahrenheitToCelcius(weather.temperature.value);
        celcius = Math.floor(celcius) ;

        tempElement.innerHTML = `${celcius}°<span>C</span>`;
        weather.temperature.unit = "celcius";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit"
    }
});

