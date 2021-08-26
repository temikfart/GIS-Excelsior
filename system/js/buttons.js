//Кнопка "Отмена" при выборе модуля
function cancellation_SMW(i)
{
    if(i == 1)
    {
        check_cancellation_SMW = false;
        obj.innerHTML = '';
        document.getElementById('checkbox_mess_SMW').checked = false;
    }
    else if(i == 2)
    {
        document.getElementById('checkbox_content_modal_windows').checked = false;
    }
}

// проверяет наличие модулей на карте
function check_moduls()
{
    if(Markers.length > 0)
    {
        document.getElementById('clean_modal').click();
        document.getElementById('checkbox_content_modal_windows').checked = true;
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