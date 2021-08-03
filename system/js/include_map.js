var map = L.map('map', {crs: L.CRS.Simple, maxZoom:0,  minZoom:-2});

var bounds = [[0,0], [3320,1442]]; //координаты карты

//ФОТОГРАФИЯ КАРТЫ
var image = L.imageOverlay('new_map.png', bounds).addTo(map);

map.fitBounds(bounds);




