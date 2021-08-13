let click = false;

function output_description(item)
{
    click = true;
    tab('one_tab');

    document.getElementById('one_tab').innerHTML = "<img src='"+mass_images_moduls[item]+"' class='tab_image'></img><p class='tab_text'>"+mass_module_description[item]+"</p>";
    document.getElementById('two_tab').innerHTML = "<p>Приоритет: "+mass_module_criteria[item][0]+" <br>Значимость: "+mass_module_criteria[item][1]+" <br>Рельеф местности: "+mass_module_criteria[item][2]+" <br>Опасность: "+mass_module_criteria[item][3]+" <br>Место затратность: "+mass_module_criteria[item][4]+" <br>Энергопотребление: "+mass_module_criteria[item][5]+"</p>";
    document.getElementById('content_teh_description').innerHTML = "<p id = 'text_content_teh_description'>"+mass_teh_description[item]+"<p>";
}

let data_coordinates = [];
let Markers = [];
let Index_moduls = [];

//кнопки модулей
function modul_click(item, x =1660, y =721)
{
    output_description(item);

    //ДОБАВЛЕНИЕ ИКОНОК НА КАРТУ

    var markerOptions = {
                        title: mass_name_modules[item],
                        clickable: true,
                        draggable: true, 

                        // Иконка
                        icon: L.icon(
                                    {
                                        iconUrl: mass_imges_markers[item],
                                        iconSize: [50, 80],
                                        iconAnchor: [0,80],
                                        popupAnchor: [25,-80]
                                    })
                            };
  
    // Значение координат для иконки
    var marker = L.marker([x, y], markerOptions);
  
    // Надпись на иконку
    marker.bindPopup(mass_name_modules[item]).openPopup();
  
    marker.addTo(map);

    marker.on('mousedown',function(){
        output_description(item);
        });

    Markers[Markers.length] = marker;
    // Записывает id  маркера
    if(data_coordinates[item] == null)
    {
        data_coordinates[item] = [];
    }
    var id = data_coordinates[item].length;
    Index_moduls[Index_moduls.length] = id;  
    data_coordinates[item][id] = [marker.getLatLng().lat, marker.getLatLng().lng]; //записывает первоначальные координаты каждого модуля на карте в массив

    // Подсказки при перемещении
    var elem_hints = document.getElementById('notices');

    marker.on('dragend', function() 
    {
        data_coordinates[item][id] = [marker.getLatLng().lat, marker.getLatLng().lng]; //перезаписывает координаты каждого модуля на карте в массиве

        var text = '';

        //перебирает и выводит все координаты модулей которые находятся на карте (пока для показа)
        data_coordinates.forEach((modul_coord, index) => 
        {
            modul_coord.forEach((coord, id_modul) =>
            {
                text += mass_name_modules[index] + "["+(id_modul+1)+"]: ";

                if((coord[0] > 3320)||( coord[1] > 1442)||(coord[0] < 0)||(coord[1] < 0))
                {
                    text += ": Здесь нельзя расположить модуль<br>";
                }
                else
                {
                    text += 'x: '+coord[0].toFixed(4)+', y: '+coord[1].toFixed(4)+"\n";
                }
            })
        });

        elem_hints.innerText = text;
    });
}

//Механика кнопок вкладок
function tab(numb) 
{
    if(click == true)
    {
        if(numb == 'one_tab')
        {
            document.getElementById('one_tab').style.display = "block";
            document.getElementById('tablinks1').style.background ='#F3AC04';
            document.getElementById('tablinks1').style.color = 'black';
            document.getElementById('two_tab').style.display = "none";
            document.getElementById('tablinks2').style.background ='#770018';
            document.getElementById('tablinks2').style.color = 'white';
        }
        else
        {
            document.getElementById('one_tab').style.display = "none";
            document.getElementById('tablinks1').style.background ='#770018';
            document.getElementById('tablinks1').style.color = 'white';
            document.getElementById('two_tab').style.display = "block";
            document.getElementById('tablinks2').style.background ='#F3AC04';
            document.getElementById('tablinks2').style.color = 'black';
        }
    }
}