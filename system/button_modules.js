let mass_name_modules = ['Жилые модули','Космодром','Вышки связи','Плантации','Мусорные полигоны','Дороги для марсоходов','Производственные предприятия','Военные базы','Спортивные модули','Административные модули','Солнечные электростанции','Ремонтные мастерские','Досуговые учреждения','Горнодобывающие шахты','Медицинские модули','Образовательные модули'];
let mass_images_moduls = [  'https://infuture.ru/filemanager/mars-one-colony-astronauts-2%20(1).jpg',
                            'https://thespaceway.info/wp-content/uploads/2020/09/rngp3g5i4ngcljczrdjz7mbmya-1024x576.jpg',
                            'https://saintbasil.ru/img.php?ipt=https://images11.popmeh.ru/upload/img_cache/e5f/e5f1e20ebc39c2d7ef27bd3c483a1497_ce_1400x746x0x21.jpg',
                            'https://gif.cmtt.space/3/club/4d/34/dc/30b74dde1f5359.jpg',
                            'https://images.kinorium.com/movie/shot/1677981/h280_3208425.jpg',
                            'https://cdnimg.rg.ru/i/photogallery/2021/02/18/231289a70b784aa/231289a70b784aa1613685957.JPG',
                            'https://i1.wp.com/v-kosmose.com/wp-content/uploads/2015/07/2-thefutureofs.jpg',
                            'https://i.pinimg.com/originals/11/89/43/1189430edc0b2807c680dfaacfb6438e.jpg',
                            'https://st3.depositphotos.com/1583081/16797/i/1600/depositphotos_167973770-stock-photo-the-colony-on-mars-autonomous.jpg',
                            'https://nplus1.ru/images/2018/07/30/47e790d4517bdd0ab97e6b165f86d8f3.jpg',
                            'https://habrastorage.org/getpro/habr/post_images/e1e/17a/453/e1e17a453964557e4405af4063463d32.jpg',
                            'https://avatars.mds.yandex.net/get-zen_doc/2814495/pub_5f9c7a55b09e797ceb27735e_5f9c8e8649505f6811208901/scale_1200',
                            'https://www.vladtime.ru/uploads/posts/2018-11/thumbs/1543324659_6693534-6433213-image-a-4_1543314581522.jpg',
                            'https://lh3.googleusercontent.com/proxy/krpGdPE8qKHpyxZ4W74K-MdVU5kIojfdev7Qta4rA_JnyhzUbunt4hVF4i6YJTYGtT_7dcbQLEceG16KrVDthsBAzYlWY-Evhlx07WuCuxQ',
                            'https://www.vladtime.ru/uploads/posts/2018-11/thumbs/1543324596_6693532-6433213-image-a-2_1543314571838.jpg',
                            'https://www.vesvks.ru/public/article/images/ed23743e5d00f002b116008b6d28cba7a1c7d836.jpg'];

let mass_module_description = [ '<b>Жилой модуль.</b> Небольшой модуль, может полноценно обеспечивать жилье для 6-10 колонистов, включает в себя кровати, ящики для хранения вещей, комнату для поддержания гигиены и т.д.',
                                '<b>Космодром.</b> Достаточно обширная территория, где расположен ЦУП, взлетно-посадочные площадки, здания для обслуживания космодрома и проживания персонала, хранилища и центр сборки и ремонта ракет.',
                                '<b>Центр связи.</b> Центр связи со спутниками, также позволяет связаться с удаленными объектами колонии.',
                                '<b>Растительный модуль.</b> Модуль, где выращиваются и исследуются растения. В большинстве модулей выращивается пища для колонистов.',
                                '<b>Мусорный полигон.</b> Открытое пространство, где выгружают мусорные отходы в виде контейнеров. На территории также расположен мусороперерабатывающий завод.',
                                '<b>Дорога.</b> Дорожное покрытие, которое позволяет с большей безопасностью передвигаться на марсоходах и пешком между объектами.',
                                '<b>Производственное предприятие.</b> Перерабатывает сырье из карьеров, плантаций и др. в продукт (еду, материалы и изделия).',
                                '<b>Военная база.</b> Служат для обеспечения безопасности колонии и сохраняют порядок в ней, то есть выполняют роль полиции в том числе.',
                                '<b>Спортивный модуль.</b> Модуль который выполняет все функции небольшого спортзала, где колонисты могут поддерживать спортивную форму и не допускать атрофию мышц.',
                                '<b>Административный модуль.</b> Здесь работает управление колонией. Они планируют ее развитие, а также решают проблемы населения. В распоряжении модуля имеются все необходимые помещения, как совещательные комнаты, так и управляющие колонией специализированные помещения.',
                                '<b>Солнечная электростанция.</b> Солнечные панели размещенные достаточно плотно. Вырабатывают электроэнергию и сохраняют ее в аккумуляторах. Полностью автоматическая система.',
                                '<b>Ремонтная мастерская.</b> Ангар, где есть необходимое оборудование для починки любой вещи: от часов до марсоходов.',
                                '<b>Досуговое учреждение.</b> Это могут быть кинокомнаты, теннисные корты, игровые и т.п. Здесь колонисты могут отвлечься от работы и отдохнуть. Найти себе хобби',
                                '<b>Карьер.</b> Удаленная от колонии территория, где добываются полезные ископаемые и грунт. Добытое сырье отправляется на перерабатывающие заводы.',
                                '<b>Медицинский модуль.</b> Большой модуль, где можно провести любые анализы или операцию. В модуле также принимаются роды. Имеется крематорий.',
                                '<b>Образовательный модуль.</b> Модуль, где помещается несколько классов. Имеются комнаты для занятий группами в любых сферах: от математики до астрономии.'];

let mass_module_criteria = [[1, 3, 'I-III', 3, '3-4', '3-4'],
                            [1, 2, 'II-III', 1, 1, 2],
                            [2, 2, 'I-II', 3, 3, 3],
                            [2, 3, 'II', 3, 2, 3],
                            [3, 2, 'II-III', 2, 2, 3],
                            [3, 1, 'II', 3, 4, 0],
                            [3, 1, 'II-III', 2, 2, '2-3'],
                            [3, 1, 'I-III', 1, 2, '2-3'],
                            [2, 2, 'I-III', 3, 4, 4],
                            [3, 1, 'I-III', 3, 3, 4],
                            [1, 3, 'I-II', 2, 3, 1],
                            [3, 1, 'II-III', 3, 3, 3],
                            [3, 1, 'II-III', 3, 3, 3],
                            [3, 1, 'II-III', 1, 1, '2-3'],
                            [2, 2, 'II-III', 3, 3, 3],
                            [3, 1, 'II-III', 3, 3, 4]];

let mass_teh_description = ['Техническое описание жилого модуля',
                            'Техническое описание космодрома',
                            'Техническое описание вышки связи',
                            'Техническое описание плантации',
                            'Техническое описание мусорных полигонов',
                            'Техническое описание дорог для марсоходов',
                            'Техническое описание производственных предприятий',
                            'Техническое описание военной базы',
                            'Техническое описание спортивных модулей',
                            'Техническое описание административного модуля',
                            'Техническое описание солнечных электростанций',
                            'Техническое описание ремонтных мастерских',
                            'Техническое описание досуговых учреждений',
                            'Техническое описание горнодобывающих шахт',
                            'Техническое описание медицинских модулей',
                            'Техническое описание образовательных модулей'];

//для проверки есть уже иконка или нет
let modules = [];
let proverka_model = [];
for (let i = 0; i < 100; i++){
    proverka_model[i] = 0;
}
let click = false;
let count = 0;

//кнопки модулей
function modul_click(item,img)
{
    //ОТКРЫТИЕ ПЕРВОЙ ВКЛАДКИ
    click = true;

    document.getElementById('one_tab').innerHTML = "<img src='"+mass_images_moduls[item]+"' class='tab_image'></img><p class='tab_text'>"+mass_module_description[item]+"</p>";
    document.getElementById('two_tab').innerHTML = "<p>Приоритет: "+mass_module_criteria[item][0]+" <br>Значимость: "+mass_module_criteria[item][1]+" <br>Рельеф местности: "+mass_module_criteria[item][2]+" <br>Опасность: "+mass_module_criteria[item][3]+" <br>Место затратность: "+mass_module_criteria[item][4]+" <br>Энергопотребление: "+mass_module_criteria[item][5]+"</p>";
    document.getElementById('text_content_teh_description').textContent = mass_teh_description[item];
    tab('one_tab');
    
    //ДОБАВЛЕНИЕ ИКОНОК НА КАРТУ
    if(proverka_model[item] < 100)
    {
        proverka_model[item]++;
        //иконка
        var iconOptions = {
        iconUrl: img,
        iconSize: [200, 200],
        }
        var customIcon = L.icon(iconOptions);
        var markerOptions = {
        title: mass_name_modules[item],
        clickable: true,
        draggable: true, //перемещение
        icon: customIcon
        }
  
        // Значение координат для иконки
        var marker = L.marker([1660, 721], markerOptions);
        count += 100;
    let module_obj = new Object();
    module_obj.img = mass_images_moduls[item]; // Картинка модуля в описании
    module_obj.criteria = mass_module_criteria[item][0] // Приоритет
    module_obj.description = mass_teh_description[item]; // Описание
    module_obj.lat = marker._latlng.lat;
    module_obj.lng = marker._latlng.lng;

    modules.push(module_obj);
    console.log(modules);
    
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