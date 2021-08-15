//Кнопка "Отмена" при выборе модуля
function cancellation_SMW()
{
    check_cancellation_SMW = false;
    obj.innerHTML = '';
    document.getElementById('mess_SMW').style.display = "none";
}

// проверяет наличие модулей на карте
function check_moduls()
{
    if(Markers.length == 0)
    {
        set_moduls();
    }
    else
    {
        document.getElementById('clean_modal').click();
    }
}

// Кнопка "Отчистить"

function clean_markers()
{
    document.getElementById('notices').innerHTML = '';
    for(var i = 0; i < Markers.length; i++)
    {
        Markers[i].remove();
    }
    Markers = [];
    data_coordinates = [];
    Index_moduls = [];
}

