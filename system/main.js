
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

