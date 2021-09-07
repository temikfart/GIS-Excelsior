let click = false;

function output_description(item,id)
{
    click = true;
    tab('one_tab');

    document.getElementById('one_tab').innerHTML = "<img src='"+mass_images_moduls[item]+"' class='tab_image'></img><p class='tab_text'>"+mass_module_description[item]+"</p>";
    document.getElementById('two_tab').innerHTML = "<p class='tab_text'>Приоритет: <b>"+mass_module_criteria[item][0]+"</b><br>Значимость: <b>"+mass_module_criteria[item][1]+"</b><br>Рельеф местности: <b>"+mass_module_criteria[item][2]+"</b><br>Опасность: <b>"+mass_module_criteria[item][3]+"</b><br>Место затратность: <b>"+mass_module_criteria[item][4]+"</b><br>Энергопотребление: <b>"+mass_module_criteria[item][5]+"</b></p>";
    document.getElementById('button_to_marker').innerHTML = "<button id ='button_delete_modul' class='buttonMA' onclick = 'delete_modul("+item +","+ id+")'></button><button class='buttonMA' id = 'button_move_modul' onclick = 'move_modul("+item +","+ id+")'></button>";
}

//Механика кнопок вкладок
function tab(numb) 
{
    if(click == true)
    {
        if(numb == 'one_tab')
        {
            document.getElementById('one_tab').style.display = "block";
            document.getElementById('tablinks1').className = "tablinks_active";
            document.getElementById('two_tab').style.display = "none";
            document.getElementById('tablinks2').className = "tablinks_block";
        }
        else
        {
            document.getElementById('one_tab').style.display = "none";
            document.getElementById('tablinks1').className = "tablinks_block";
            document.getElementById('two_tab').style.display = "block";
            document.getElementById('tablinks2').className = "tablinks_active";
        }
    }
}


// Выбор модуля (нажили на модуль)
var check_cancellation_SMW = true;
function select_modul(item)
{
    check_cancellation_SMW = true;
    document.getElementById('text_MSMW').innerHTML = "Что бы поставить <i>"+mass_name_modules[item].toLowerCase()+"</i>, нажмите на <b>левую кнопку мыши</b>";
    document.getElementById('checkbox_mess_SMW').checked = true;
    document.getElementById('select_modul').click();
    var boxElem = document.getElementById('map');
    var obj = document.getElementById('obj');
    obj.innerHTML = '<img id="pointer1" class="box-pointer box-pointer-hidden" src="'+mass_imges_markers[item]+'">';
    var pointerElem = document.getElementById('pointer1');

        function onMouseMove(event) //Привязывается маркер к курсору
        {
            var mouseX = event.pageX;
            var mouseY = event.pageY;
            var crd = boxElem.getBoundingClientRect();

            if (crd.left <= mouseX && mouseX <= crd.right && crd.top <= mouseY && mouseY <= crd.bottom)
            {
                if (pointerElem.classList.contains('box-pointer-hidden')) 
                {
                    pointerElem.classList.remove('box-pointer-hidden');
                }

                var Mx = mouseX-333;
                var My = mouseY-83;
                pointerElem.style.transform = 'translate3d(' + Mx + 'px, ' + My + 'px, 30px)';
            } 
            else 
            {
                pointerElem.classList.add('box-pointer-hidden');
            }
        }

    function disablePointer() //убираем маркер если курсор уходит с карты
    {
        requestAnimationFrame(function hidePointer() 
        {
            pointerElem.classList.add('box-pointer-hidden');
        });
    }

    boxElem.addEventListener('mousemove', onMouseMove, false);
    boxElem.addEventListener('mouseleave', disablePointer, false);


    var check_SM = true;
    map.on('click', function () //при клике на карте
    {
        var CMC = check_module_coor(item);//проверка координатов модуля (находится в файле аналагичном названии функции)

        if(CMC == true)
        {
            if((check_SM == true)&&(check_cancellation_SMW == true))
            {
                obj.innerHTML = '';
                document.getElementById('cancellation_SMW').click();
                document.getElementById('checkbox_mess_SMW').checked = false;

                put_modul(item, x_in_map, y_in_map);
            }
            check_SM = false;//что бы модуль ставился только один    ///КОГДА ОТМЕНА ТОЖЕ ДЕЛАТЬ ЛОЖЬ
        }
        else
        {
            if((check_SM == true)&&(check_cancellation_SMW == true))
            {
                document.getElementById('text_error_MSMW').innerHTML = "<b>ОШИБКА: </b> в данном месте <b>"+mass_name_modules[item].toLowerCase()+"</b>, ставить нельзя"
                document.getElementById('error_put_modul').checked = true;
                setTimeout(close_error_put_modul, 2000);
                function close_error_put_modul()
                {
                    document.getElementById('error_put_modul').checked = false;
                }
            }
        }
    });
} 

let data_coordinates = [];
let Markers = [];
let unic_id = 0;
var controler;
var mass_markers = [];
var LayerEmpty = L.layerGroup([]); 
var LayerMarkers;

//Создание маркера
function put_modul(item, x, y)
{
    var markerOptions = {
                        title: mass_name_modules[item],
                        clickable: true,
                        draggable: false, //перемещение

                        icon: L.icon({ //настройки иконки
                                        iconUrl: mass_imges_markers[item],
                                        iconSize: [50, 80],
                                        iconAnchor: [0,80],
                                        popupAnchor: [25,-80]
                                    })
                            };
  
    var marker = L.marker([x, y], markerOptions);// Значение координат для иконки
  
    // Надпись на иконку
    marker.bindPopup(mass_name_modules[item]).openPopup();
  
    marker.addTo(map);

    // Записывает id  маркера
    if(data_coordinates[item] == null)
    {
        data_coordinates[item] = [];
        Markers[item] = [];
    }
    var id = unic_id;
    unic_id++;
    Markers[item][id] = marker;  
    data_coordinates[item][id] = [x, y]; //записывает первоначальные координаты каждого модуля на карте в массив

    //Переключение информации в блоках
    output_description(item, id); 
    marker.on('mousedown',function(){
        output_description(item, id);
        show_coord_modul(item,id);
    });

    show_coord_modul();
    controller()
}

//перебирает и выводит все координаты модулей которые находятся на карте (пока для показа)
function show_coord_modul(item = -10, id = -10)
{
    var elem_hints = document.getElementById('notices');

    var text = '';
    data_coordinates.forEach((modul_coord, index) => 
    {
        modul_coord.forEach((coord, id_modul) =>
        {
            if(item >= 0)
            {
                if((item == index)&&(id == id_modul))
                {
                    text += "<b>"+mass_name_modules[index] + "["+id_modul+"]:<br>";
                }
                else
                {
                    text += mass_name_modules[index] + "["+id_modul+"]:<br>";
                }
            }
            else
            {
                text += mass_name_modules[index] + "["+id_modul+"]:<br>";
            }

            if((coord[0] > 3320)||( coord[1] > 1442)||(coord[0] < 0)||(coord[1] < 0))
            {
                text += ": Здесь нельзя расположить модуль</b><br>";
            }
            else
            {
                text += 'x: '+coord[0].toFixed(4)+', y: '+coord[1].toFixed(4)+"</b><br>";
            }
        })
    });
    elem_hints.innerHTML = text;
}

//Удаление модуля
function delete_modul(item, id)
{
    Markers[item][id].remove();
    Markers[item].splice(id, 1);
    data_coordinates[item].splice(id, 1);
    controller()
}

//Перемещение модуля
function move_modul(item, id)
{
    delete_modul(item, id);
    select_modul(item);
}

//Kонтроллер "Скрыть, Показать"
function controller()
{
    mass_markers = [];
    Markers.forEach((markers_modul) => 
    {
        markers_modul.forEach((marker_one) =>
        {
            mass_markers [mass_markers.length] = marker_one;
        });
    });

    LayerMarkers = L.layerGroup(mass_markers);
    
    if(controler)
    {
        map.removeControl(controler);
    }
    var overlayMaps = {
        "Скрыть": LayerEmpty,
        "Показать": LayerMarkers
    };
    controler = L.control.layers(overlayMaps).addTo(map);
}