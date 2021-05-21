var map = L.map('map', {crs: L.CRS.Simple,
                        maxZoom:0, 
                        minZoom:-2});

var bounds = [[0,0], [3320,1442]]; //разрешение карты

//ФОТОГРАФИИ КАРТ
var image = L.imageOverlay('map_mars.jpg', bounds).addTo(map);

map.fitBounds(bounds);

L.CRS.Wall = L.extend({}, L.CRS.Simple, {
  transformation: new L.Transformation(0.4920000014213405, 5.758860016636791, -0.4920000014213405, 968.389580797584),
});







/*             //карта мира

var map = L.map('map', {
}).setView([55.702868, 37.530865], 10);

var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="copyright">Openstreetmap</a>'
}).addTo(map);

*/