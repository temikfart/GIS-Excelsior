//В ЭТОМ ФАЙЛЕ ИСКЛЮЧИТЕЛЬНО ОДНА ФУНКЦИЯ ВОЗВРАЩАЮЩАЯ TRUE или FALSE (разрешение или отказ) НА ПОСТАВКУ МОДУЛЯ НА КАРТУ

function check_module_coor(item)
{
    if((x_in_map > 3320)||( y_in_map > 1442)||(x_in_map < 0)||( y_in_map < 0))
    {
        return false;
    }
    else
    {
        switch(item)
        {
            case 0:
                return true;
            break;

            case 1:
                return true;
            break;

            case 2:
                return true;
            break;

            case 3:
                return true;
            break;

            case 4:
                return true;
            break;

            case 6:
                return true;
            break;

            case 7:
                return true;
            break;

            case 8:
                return true;
            break;

            case 9:
                return true;
            break;

            case 10:
                return true;
            break;

            case 11:
                return true;
            break;

            case 12:
                return true;
            break;

            case 14:
                return true;
            break;

            case 15:
                return true;
            break;

            case 16:
                return true;
            break;
        }
    }
}