// initialize the map and set its view to our chosen geographical coordinates and a zoom level
var mymap = L.map('mapid').setView([51.508, -0.11], 13);

// add a tile layer to add to our map, in this case it’s a Mapbox Streets tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1Ijoia2xycW4iLCJhIjoiY2ltcWpzNzFvMDBqa3V3bTR4YmJiMTZmNCJ9.azeYvLAmWAeNpo694f_Wfg'
}).addTo(mymap);

console.log('connected')

// add a marker
var marker = L.marker([51.5, -0.09]).addTo(mymap);

// add a circle
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

// add a polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

// create popup for the objects
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// create a standalong popup
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
   
    
    // show lat long on click
var popup = L.popup();
function onMapClick(e) {
    // alert("You clicked the map at " + e.latlng);
    var latlong = document.querySelector(".latlong");
    latlong.innerHTML = e.latlng;
    
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
    
}

mymap.on('click', onMapClick);
mymap.on('hover', onMapClick);


// make second map
// initialize the map and set its view to our chosen geographical coordinates and a zoom level
var mymap2 = L.map('mapid2').setView([41.808, -71.397], 12);

// add a tile layer to add to our map, in this case it’s a Mapbox Streets tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1Ijoia2xycW4iLCJhIjoiY2ltcWpzNzFvMDBqa3V3bTR4YmJiMTZmNCJ9.azeYvLAmWAeNpo694f_Wfg'
}).addTo(mymap2);