async function getCityName(lat, long) {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    const city = data.address.city || data.address.town || data.address.village || 'Unknown';
    const country = data.address.country;
    sessionStorage.setItem('location', JSON.stringify({
        coords: {
            lat: lat,
            long: long
        },
        city: city,
        country: country
    }));
    return { city: city, country: country };
};

if ('geolocation' in navigator) {
    // Create a map and set its initial view to a specific location and zoom level
    const myMap = L.map('map').setView([0, 0], 13);

    navigator.geolocation.getCurrentPosition(async function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        try {
            var locationInfo = await getCityName(lat, long);
            const locationName = locationInfo.city + ', ' + locationInfo.country;
            myMap.setView([lat, long], 13);
            // Add a tile layer (you can use different tile layers, e.g., from OpenStreetMap)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(myMap);

            // Create a marker with the given coordinates and add it to the map
            let marker = L.marker([lat, long]).addTo(myMap);

            // Optionally, you can add a popup to the marker
            marker.bindPopup(locationName);
        } catch (error) {
            console.log(error);
        }
    });
} else {
    // If Geolocation API is not available, show an error message
    alert('Geolocation is not available in this browser.');
} 