//В ЭТОМ ФАЙЛЕ ИСКЛЮЧИТЕЛЬНО ОДНА ФУНКЦИЯ ВОЗВРАЩАЮЩАЯ TRUE или FALSE (разрешение или отказ) НА ПОСТАВКУ МОДУЛЯ НА КАРТУ

function check_module_coor(item, x, y)
{
    var danger = mass_module_criteria[item][3];
    switch(danger)//изменить (стоит на сколько пикселей нельзя ставить) на метры
    {
        case 1:
            var danger_m = 400;
        break;

        case 2:
            var danger_m = 300;
        break;

        case 3:
            var danger_m = 30;
        break;
    }

    var check_error = true;
    data_coordinates.forEach((modul_coord, index) => 
    {
        modul_coord.forEach((coord) =>
        {
            var x_m = coord[0];
            var y_m = coord[1];

            var katet_x = x - x_m;
            var katet_y = y - y_m
            var gipotenuza = Math.sqrt((katet_x*katet_x)+(katet_y*katet_y));

            //проверяем критерии
            var dng_modul = mass_module_criteria[index][3];
            switch(dng_modul)//изменить (стоит на сколько пикселей нельзя ставить) на метры
            {
                case 1:
                    var dng_modul_m = 400;
                break;

                case 2:
                    var dng_modul_m = 300;
                break;

                case 3:
                    var dng_modul_m = 30;
                break;
            }
            
            if(gipotenuza < dng_modul_m+danger_m)
            {
                check_error = false;
                return;
            }

        });
    });
    return [check_error,1];
}

//проверка модуль находиться на карте или нет
function check_coor_modul_map()
{
    if((x_in_map > 3320)||( y_in_map > 1442)||(x_in_map < 0)||( y_in_map < 0))
    {
        return false;
    }
    else
    {
        return true;
    }
}