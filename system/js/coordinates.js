//вывод координат
map.on('mousemove', function (e) 
{
  var coords = document.getElementById('coords_item');
  if((e.latlng.lat > 3320)||( e.latlng.lng > 1442)||(e.latlng.lat < 0)||( e.latlng.lng < 0)) //поставить ограничения карты (когда станут известны координаты)
  {
	coords.innerHTML = 'вы вышли из карты';
  }
  else
  {
	coords.innerHTML = "x:" + e.latlng.lat + ' ' + "y: " + e.latlng.lng;
  }
});

