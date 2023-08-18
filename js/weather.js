import { getCityName } from './geolocation.js';
var key = "fda1c4c770e842d197b140037231204";
var query = getCityName(33.0509055, -16.3581642).city;
var weather;

async function getWeatherInfo() {
    var apiUrl = 'http://api.weatherapi.com/v1/forecast.json?key=' + key + '&q=' + query + '&days=10&aqi=no';
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            weather = data;
            document.getElementById('temp-container').innerText = weather.current.temp_c + 'ºC';
            const contentElement = document.getElementById('weather-main-box');
            contentElement.style.backgroundImage = 'url(' + weather.current.condition.icon + ')';
            document.getElementById('weather-min-temp').innerText = 'Min. ' + weather.forecast.forecastday[0].day.mintemp_c + 'ºC';
            document.getElementById('weather-max-temp').innerText = 'Max. ' + weather.forecast.forecastday[0].day.maxtemp_c + 'ºC';

        })
};
getWeatherInfo();
setInterval(getWeatherInfo, 1000)
console.log(weather);