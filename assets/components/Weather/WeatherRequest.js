var rootUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
var key = 'fc2d32015a4e6791b7fb52aa605a85c8';
var apiUrl = '&appid=';

module.exports = {
    get: function(place) {
        return fetch(rootUrl + place + apiUrl + key, {
            headers: {
                // No need for special headers
            }
        })
        .then(function(response) {
            return response.json();
        });
    }
};