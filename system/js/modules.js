//для проверки есть уже иконка или нет
let proverka_model = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

let click = false;
let count = 0;

//кнопки модулей
function modul_click(item, x =1660, y =721)
{
    //ОТКРЫТИЕ ПЕРВОЙ ВКЛАДКИ
    click = true;
    tab('one_tab');

    document.getElementById('one_tab').innerHTML = "<img src='"+mass_images_moduls[item]+"' class='tab_image'></img><p class='tab_text'>"+mass_module_description[item]+"</p>";
    document.getElementById('two_tab').innerHTML = "<p>Приоритет: "+mass_module_criteria[item][0]+" <br>Значимость: "+mass_module_criteria[item][1]+" <br>Рельеф местности: "+mass_module_criteria[item][2]+" <br>Опасность: "+mass_module_criteria[item][3]+" <br>Место затратность: "+mass_module_criteria[item][4]+" <br>Энергопотребление: "+mass_module_criteria[item][5]+"</p>";
    document.getElementById('content_teh_description').innerHTML = "<p id = 'text_content_teh_description'>"+mass_teh_description[item]+"<p>";

    //ДОБАВЛЕНИЕ ИКОНОК НА КАРТУ
    if(proverka_model[item] == false)
    {
        proverka_model[item] = true;

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
        count += 100;
  
        // Надпись на иконку
        marker.bindPopup(mass_name_modules[item]).openPopup();
  
        marker.addTo(map);

        items[items.length] = item;
        markers[markers.length] = marker;

        // Рекурсивная функция при клике на маркер
        marker.on('mousedown',function(){
            modul_click(item);
          });

          data_coordinates[item] = [marker.getLatLng().lat, marker.getLatLng().lng]; //записывает первоначальные координаты каждого модуля на карте в массив

        // Подсказки при перемещении
        var elem = document.getElementById('notices');
        elem.innerText += mass_name_modules[item]+": x:"+x+", y:"+y+"\n";

        marker.on('dragend', function() 
        {
            data_coordinates[item] = [marker.getLatLng().lat, marker.getLatLng().lng]; //перезаписывает координаты каждого модуля на карте в массиве

            var text = '';

            for(var i = 0; i < items.length; i++)
            {
                text += mass_name_modules[items[i]];

                if((data_coordinates[items[i]][0] > 3320)||( data_coordinates[items[i]][1] > 1442)||(data_coordinates[items[i]][0] < 0)||(data_coordinates[items[i]][1] < 0))
                {
                    text += ": Здесь нельзя расположить модуль<br>";
                    //document.getElementById("map").style.backgroundColor = "#DD5145";
                }
                else
                {
                    text += ": x:"+data_coordinates[items[i]][0].toFixed(4)+" y:"+data_coordinates[items[i]][1].toFixed(4)+ "<br>"; 
                    //document.getElementById("map").style.backgroundColor = "#fff";
                }
            }
            elem.innerHTML = text;

        });
    }
}

let data_coordinates = [];

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