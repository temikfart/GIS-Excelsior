let mass_name_modules = ['Жилые модули','Космодром','Вышки связи','Плантации','Мусорные полигоны','Дороги для марсоходов','Производственные предприятия','Военные базы','Спортивные модули','Административные модули','Солнечные электростанции','Ремонтные мастерские','Досуговые учреждения','Горнодобывающие шахты','Медицинские модули','Образовательные модули'];
let mass_module_description = ['Описание жилого модуля','Описание космодрома'];
let mass_module_criteria = ['Критерии жилого модуля','Критерии космодрома'];
let mass_teh_description = ['Техническое описание жилого модуля','Техническое описание космодрома'];
//для проверки есть уже иконка или нет
let proverka_model = [false,false];

let click = false;
let count = 0;

//кнопки модулей
function modul_click(item,img)
{
    //ОТКРЫТИЕ ПЕРВОЙ ВКЛАДКИ
    click = true;

    document.getElementById('description').textContent = mass_module_description[item];
    document.getElementById('criteria').textContent = mass_module_criteria[item];
    document.getElementById('text_content_teh_description').textContent = mass_teh_description[item];
    tab('one');

    //ДОБАВЛЕНИЕ ИКОНОК НА КАРТУ
    if(proverka_model[item] == false)
    {
        proverka_model[item] = true;
        //иконка
        var iconOptions = {
        iconUrl: img,
        iconSize: [200, 100]
        }
        var customIcon = L.icon(iconOptions);
        var markerOptions = {
        title: mass_name_modules[item],
        clickable: true,
        draggable: true, //перемещение
        icon: customIcon
        }
  
        // Значение координат для иконки
        var marker = L.marker([1660, 721+count], markerOptions);
        count += 100;
  
        // Надпись на иконку
        marker.bindPopup(mass_name_modules[item]).openPopup();
  
        marker.addTo(map);
    }
}

//механика кнопок вкладок
function tab(numb) 
{
    if(click == true)
    {
        if(numb == 'one')
        {
            document.getElementById('one').style.display = "block";
            document.getElementById('tablinks1').style.background ='white';
            document.getElementById('tablinks1').style.color = 'black';
            document.getElementById('two').style.display = "none";
            document.getElementById('tablinks2').style.background ='#283593';
            document.getElementById('tablinks2').style.color = 'white';
        }
        else
        {
            document.getElementById('one').style.display = "none";
            document.getElementById('tablinks1').style.background ='#283593';
            document.getElementById('tablinks1').style.color = 'white';
            document.getElementById('two').style.display = "block";
            document.getElementById('tablinks2').style.background ='white';
            document.getElementById('tablinks2').style.color = 'black';
        }
    }
}