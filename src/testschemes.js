//type 1
import rect0702111210312 from './rects/0702111210312.svg'; //Открытый зелёный прямоугольник
import rect0702111210311 from './rects/0702111210311.svg'; //Закрытый красный прямоугольник
import rect0702111210311_undefined from './rects/0702111210311_undefined.svg'; //Серый undefined прямоугольник

//type2
import rect0702111210412 from './rects/0702111210412.svg'; //Открытый зелёный прямоугольник с прямоугольником
import rect0702111210411 from './rects/0702111210411.svg'; //Закрытый красный прямоугольник с прямоугольником
import rect0702111210411_undefined from './rects/0702111210411_undefined.svg'; //Серый undefined прямоугольник

//type3
import rect0700911110612 from './rects/0700911110612.svg' //Открытый зелёный прямоугольник в горизонтальном положении
import rect0700911110611 from './rects/0700911110611.svg' //Закрытый красный прямоугольник в горизонтальном положении
import rect0700911110611_undefined from './rects/0700911110611_undefined.svg'; //Серый undefined прямоугольник

//type4
import rect0702411210212 from './rects/0702411210212.svg' //Открытый зелёный маленький зелёный прямоугольник
import rect0702411210211 from './rects/0702411210211.svg' //Закрытый красный маленький зелёный прямоугольник
import rect0702411210211_undefined from './rects/0702411210211_undefined.svg'; //Серый undefined прямоугольник

//type5
import rect0700611110412 from './rects/0700611110412.svg' //Закрытый красный маленький зелёный прямоугольник
import rect0700611110411 from './rects/0700611110411.svg' //Закрытый красный прямоугольник с короткой линией
import rect0700611110411_undefined from './rects/0700611110411_undefined.svg'; //Серый undefined прямоугольник


export function getRect(state, type)
{
    // var array = new Map(
    //     [
    //         //Закрытие открытых участков
    //         ['0702111210412', rect0702111210411],
    //         ['g4837', rect0702111210311],

    //         //Открытие закрытых участков
    //         ['0701011110511', rect0702111210312],
    //         ['0702211210411', rect0702111210312],
    //         ['0701411210111', rect0702111210312],
    //         ['0702111210411', rect0702111210412],
    //     ]n
    // );

    var url;

    //Манипулирование с типом 1
    if (type === "1" && state === "on")
    {
        url = rect0702111210311;
    }else if (type === "1" && state === "off")
    {
        url = rect0702111210312;  
    }else if (type === "1" && state === "undefined")
    {
        url = rect0702111210311_undefined;  
    }

    //Манипулирование с типом 2
    if (type === "2" && state === "on")
    {
        url = rect0702111210411;
    }else if (type === "2" && state === "off")
    {
        url = rect0702111210412;
    }else if (type === "2" && state === "undefined")
    {
        url = rect0702111210411_undefined;  
    }

    //Манипулирование с типом 3
    if (type === "3" && state === "on")
    {
        url = rect0700911110611;
    }else if (type === "3" && state === "off")
    {
        url = rect0700911110612;
    }else if (type === "3" && state === "undefined")
    {
        url = rect0700911110611_undefined;  
    }

    //Манипулирование с типом 4
    if (type === "4" && state === "on")
    {
        url = rect0702411210211;
    }else if (type === "4" && state === "off")
    {
        url = rect0702411210212;
    }else if (type === "4" && state === "undefined")
    {
        url = rect0702411210211_undefined;  
    }

    //Манипулирование с типом 5
    if (type === "5" && state === "on")
    {
        url = rect0700611110411;
    }else if (type === "5" && state === "off")
    {
        url = rect0700611110412;
    }else if (type === "5" && state === "undefined")
    {
        url = rect0700611110411_undefined;  
    }


    return url;
    //return array.get(id);
}

export function changeLine(id, doc)
{
    switch(id)
    {
        case "0700811110612":
            {
                var state = doc.getElementById(id).getAttribute("state");
                
                if (state === "on")
                {
                    doc.getElementById("path5319-3-13-9-32-4-5-4-8-0-5-8-5-8").style.stroke = "#ff0000";
                }else if (state === "off")
                {
                    doc.getElementById("path5319-3-13-9-32-4-5-4-8-0-5-8-5-8").style.stroke = "#008000";
                }
                break;
            }
    }
}