var key = "fda1c4c770e842d197b140037231204";
var query = 'Porto Santo';
function getAndUpdateTemp() {
    var apiUrl = 'http://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + query + '&aqi=no';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            var temp_c = data.current.temp_c;
            var temp_f = data.current.temp_f;
            var tempElement = document.getElementById('temp-container');
            tempElement.textContent = temp_c + '°C';
        })
        .catch(err => console.log("Error getting the temperature: " + err));
}

getAndUpdateTemp();

setInterval(getAndUpdateTemp, 1000*60*5)