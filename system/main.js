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




function getHelp()
{
	var elem = document.getElementById('notices');
	if (!e) {
		var e = window.event;
	}
	var x = y = 0;
	if(e.pageX > 180 && e.pageY < 120){
		elem.innerHTML = "Здесь нельзя расположить модуль";
		document.getElementById("map").style.backgroundColor = "#DD5145";
	}else{
		elem.innerHTML = "Подсказки";
		document.getElementById("map").style.backgroundColor = "#fff";
	}

	if((e.pageX > 700 && e.pageX < 800) && (e.pageY < 200 && e.pageX > 300)){
		elem.innerHTML = "Подходящее расположение для модуля";
	}
}

