//Кнопка "Отмена" при выборе модуля
function cancel_modul()
{
    data_check[data_check.length-1] = false;
    obj.innerHTML = '';
    document.getElementById('checkbox_mess_SMW').checked = false;
    delete_circle();
}

//Кнопка "Отмена" на модальном окне "Отчистить"
function cancel_clean()
{
    document.getElementById('checkbox_content_modal_windows').checked = false;
}

// проверяет наличие модулей на карте
function check_moduls()
{
    if(Markers.length > 0)
    {
        document.getElementById('clean_modal').click();
        document.getElementById('checkbox_content_modal_windows').checked = true;
        cancel_modul();
    }
    else
    {
        delete_drow();
    }
}

// Кнопка "Отчистить"
function clean_markers()
{
    document.getElementById('checkbox_content_modal_windows').checked = false;
    if(controler)
    {
        map.removeControl(controler);
    }
    
    document.getElementById('notices').innerHTML = '';

    Markers.forEach((markers_modul) => 
    {
        markers_modul.forEach((marker) =>
        {
            marker.remove();
        });
    });
    Markers = [];
    data_coordinates = [];

    delete_circle();
    delete_drow();
}

//Кнопки "Показать" и "Скрыть"
{
    function show_hide(fun)
    {
        if(fun == "show")
        {
            document.getElementById("button_hide").className = "button_active";
            document.getElementById("button_show").className = "button_block";
            document.getElementsByClassName("leaflet-control-layers-selector")[1].click();
        }
        else if(fun == "hide")
        {
            document.getElementById("button_hide").className = "button_block";
            document.getElementById("button_show").className = "button_active";
            document.getElementsByClassName("leaflet-control-layers-selector")[0].click();
        }
    }
}

//Кнопку "Zoom"
function zoom(fun)
{
    if(fun == "in")
    {
        document.getElementsByClassName('leaflet-control-zoom-in')[0].click();
    }
    else if(fun == "out")
    {
        document.getElementsByClassName('leaflet-control-zoom-out')[0].click();
    }
}



//КНОПКИ ДОРОГИ

//Механика активации кнопок
//(Активация кнопок)
function active_button_drow(num)
{
    document.getElementById("button_drow").className = "button_block activ_bd";
    document.getElementById("button_drow").disabled = true;
    document.getElementById("delete_drow").className = "button_block activ_bd";
    document.getElementById("button_edit").className = "button_block activ_bd";
    document.getElementById("delete_drow").disabled = true;
    document.getElementById("button_edit").disabled = true;
    if(num == 1)
    {
        document.getElementById("button_back").className = "button img_red";
        document.getElementById("button_cancel1").className = "button img_red";
        document.getElementById("button_back").disabled = false;
        document.getElementById("button_cancel1").disabled = false;
        document.getElementById("button_save1").className = "button img_red";
        document.getElementById("button_save1").disabled = false;
    }
    else if(num == 2)
    {
        document.getElementById("button_cancel2").className = "button img_red";
        document.getElementById("button_save2").className = "button img_red";
        document.getElementById("button_cancel2").disabled = false;
        document.getElementById("button_save2").disabled = false;
    }
}
//(Блокировка кнопок)
function block_button_drow(num)
{
    document.getElementById("button_drow").className = "button img_red";
    document.getElementById("button_drow").disabled = false;
    document.getElementById("delete_drow").className = "button img_red";
    document.getElementById("button_edit").className = "button img_red";
    document.getElementById("delete_drow").disabled = false;
    document.getElementById("button_edit").disabled = false;
    if(num == 1)
    {
        document.getElementById("button_back").className = "button_block activ_bd";
        document.getElementById("button_save1").className = "button_block activ_bd";
        document.getElementById("button_cancel1").className = "button_block activ_bd";
        document.getElementById("button_back").disabled = true;
        document.getElementById("button_save1").disabled = true;
        document.getElementById("button_cancel1").disabled = true;
    }
    else if(num == 2)
    {
        document.getElementById("button_save2").className = "button_block activ_bd";
        document.getElementById("button_cancel2").className = "button_block activ_bd";
        document.getElementById("button_save2").disabled = true;
        document.getElementById("button_cancel2").disabled = true;
    }
}

//Проложить дорогу
function create_drow()
{
    output_description(5,0);//активирую блок описание модуля
    active_button_drow(1);
    document.getElementsByClassName("leaflet-draw-draw-polyline")[0].click();
}

//сохранить дорогу(при построении)
function save1_drow()
{
    document.getElementsByClassName("leaflet-draw-actions")[0].childNodes[0].childNodes[0].click();
    block_button_drow(1);
    cancel1_drow();
}

//отмена постройки дороги(при построении)
function cancel1_drow()
{
    block_button_drow(1);
    document.getElementsByClassName("leaflet-draw-actions")[0].childNodes[2].childNodes[0].click();
}

//назад на пункт(при построении)
function back_drow()
{
    document.getElementsByClassName("leaflet-draw-actions")[0].childNodes[1].childNodes[0].click();
}

//редактировать дорогу
function edit_drow()
{
    output_description(5,0);
    active_button_drow(2);
    document.getElementsByClassName("leaflet-draw-edit-edit")[0].click();
}

//сохранение редактирования
function save2_drow()
{
    document.getElementsByClassName("leaflet-draw-actions")[1].childNodes[0].childNodes[0].click();
    block_button_drow(2);
    cancel2_drow();
}

//отмена редактирования
function cancel2_drow()
{
    block_button_drow(2);
    document.getElementsByClassName("leaflet-draw-actions")[1].childNodes[1].childNodes[0].click();
}

//Отчистить дороги
function delete_drow()
{
    document.getElementsByClassName("leaflet-draw-edit-remove")[0].click();
    document.getElementsByClassName("leaflet-draw-actions-bottom")[0].childNodes[2].childNodes[0].click();
}