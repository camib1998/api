mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtaWxsYWI5OCIsImEiOiJja2Zxa2VkeTcwdnltMnBsaDRzbnhtcjIyIn0.0f6fxuXkrn_KJAU0rgUymA';
var münchen = [11.551,48.132];
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/camillab98/ckfxu2x4v0l7e19s4qfqct8uo',
center: münchen,
zoom: 14
});
 
// create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setText(
'Oktoberfesten.'
);
 
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat(münchen)
.setPopup(popup) // sets a popup on this marker
.addTo(map);   
    





        $(document).ready(function() {

            // get the weather data
            fetch("http://api.openweathermap.org/data/2.5/weather?q=München&lang=da&units=metri&appid=603c513b0ced4a94f7ddce08428a26ca").then(response => {
                return response.json();
            }).then(data => {

                // Work with JSON data here
                console.log(data); // show what's in the json

                $('#result').append(
                    '<div class="weatherInfo">' +
                    data.weather[0].main +
                    ' in ' +
                    data.name +
                    '<figure><img src="http://openweathermap.org/img/w/' +
                    data.weather[0].icon +
                    '.png" alt="The weather : ' +
                    data.weather[0].main +
                    '"></figure>' +
                    '</div>');

                // here are the icons: https://openweathermap.org/weather-conditions 

            }).catch(err => {
                // Do something for an error here
                console.log('There was an error ...');
                $('#mytemp').text(weather.main.temp);
            });

        }); // document ready end
