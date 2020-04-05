export default function changeLines(doc, id, state)
{
    var docG = doc.querySelectorAll("g");
    var docP = doc.querySelectorAll("path");

    var color = (state == "on") ? "ff0000" : "008000";
    
    if (state == "undefined")
    {
        color = "#808080";
    }

    //Изменение линий
    switch(id)
    {
        case "0700811110612":
        {
            for (var item of docP)
            {
                if (item.getAttribute("id") == "path5319-3-13-9-32-4-5-4-8-0-5-8-5"
                || item.getAttribute("id") == "path5319-3-13-9-32-4-5-4-8-0-5-8-5-8")
                {
                    item.style.stroke = color;
                }
            }
        break;
        }

        case "0700911110611":
        {
            for (var item of docP)
            {
                if (item.getAttribute("id") == "path5319-3-13-9-32-4-5-4-8-0-5-8-5-8-1"
                || item.getAttribute("id") == "path5319-3-13-9-32-4-5-4-8-0-5-8-5-8-1-5"
                || item.getAttribute("id") == "path5319-3-13-9-32-4-5-4-8-0-5-8-5-8-5")
                {
                    item.style.stroke = color;
                }
            }
        break;
        }
    }
}