
function getPosition(e){
	var x = y = 0;
    var coords = document.getElementById('coords_item');
	if (!e) {
		var e = window.event;
	}
 
	if (e.pageX || e.pageY){
		x = e.pageX;
		y = e.pageY;
	} else if (e.clientX || e.clientY){
		x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
 
	coords.innerHTML = "x:" + x + ' ' + "y: " + y;
}
function getHelp(){
	var elem = document.getElementById('notices');
	if (!e) {
		var e = window.event;
	}
	var x = y = 0;
	if(e.pageX > 180 && e.pageY < 120){
		elem.innerHTML = "Здесь нельзя расположить модуль";
	}else{
		elem.innerHTML = "Подсказки";
	}

	if((e.pageX > 700 && e.pageX < 800) && (e.pageY < 200 && e.pageX > 300)){
		elem.innerHTML = "Подходящее расположение для модуля";
	}
}

function getColor(){
	var main_container = document.getAnimations("main_container");
	main_container.style.color = "red";
}
