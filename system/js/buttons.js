// проверяет наличие модулей на карте
function check_moduls(numb)
{
    if(Markers.length == 0)
    {
        if(numb == 0)
        {
            set_moduls();
        }
    }
    else
    {
        if(numb == 0)
        {
            document.getElementById('set_modal').click();
        }
        else if(numb == 1)
        {
            document.getElementById('clean_modal').click();
        }
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
}

// Кнопка "Расствить"

function set_moduls()
{
    var options = [[[500,500],[1200,600],[1000,700]],
                    [[1200,300],[100,500],[500,700]],
                    [[1500,500],[600,600],[200,100]]];
    clean_markers();

    var opt = Math.floor(Math.random() * 3);
    for(var i = 0; i < 3; i++ )
    {    
        modul_click(i,options[opt][i][0],options[opt][i][1]);
    }
}
