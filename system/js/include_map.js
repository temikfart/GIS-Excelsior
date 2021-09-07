var map = L.map('map', {crs: L.CRS.Simple, maxZoom:0,  minZoom:-2});

var bounds = [[0,0], [3320,1442]]; //координаты карты

//ФОТОГРАФИЯ КАРТЫ
var image = L.imageOverlay('new_map.png', bounds).addTo(map);

map.fitBounds(bounds);

//вывод координат
var x_in_map = 0;
var y_in_map = 0;

map.on('mousemove', function (e) 
{
  x_in_map = e.latlng.lat;
  y_in_map = e.latlng.lng;

  var coords = document.getElementById('coords_item');
  coords.innerHTML = "x:" + x_in_map + ' ' + "y: " + y_in_map;

  
  if((e.latlng.lat > 3320)||( e.latlng.lng > 1442)||(e.latlng.lat < 0)||( e.latlng.lng < 0)) //поставить ограничения карты (когда станут известны координаты)
  {
	  coords.innerHTML = 'вы вышли из карты';
  }
  else
  {
	  coords.innerHTML = "x:" + e.latlng.lat.toFixed(4) + ' ' + "y: " + e.latlng.lng.toFixed(4);
  }
});


//Дороги

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
  draw: {polyline: {shapeOptions: {color: 'black'},},},
	edit: {featureGroup: drawnItems}
		});
		map.addControl(drawControl);

		map.on('draw:created', function (e) {
				layer = e.layer;
			drawnItems.addLayer(layer);
		});



    





