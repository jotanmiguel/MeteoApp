var key = "fda1c4c770e842d197b140037231204";
var query = 'Porto Santo';
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
        })
};
getWeatherInfo();
console.log(weather);

setInterval(getWeatherInfo, 1000*60*5)