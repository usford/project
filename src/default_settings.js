import { clickRect } from "./App";

const infoState = [
    {id: "0700811110612", state:"off"},
    {id: "0700911110611", state:"off"},
    {id: "0701011110511", state:"on"},
    {id: "0700611110411", state:"on"},
    {id: "0701111110511", state:"on"},
    {id: "0700511110411", state:"on"},
    {id: "0701211110512", state:"off"},
    {id: "0700411110412", state:"off"},
    {id: "0702111210412-8", state:"on"},
    {id: "0702011210411", state:"on"},
    {id: "0702111210412", state:"off"},
    {id: "0701411210111", state:"on"},
    {id: "0702211210411", state:"on"},
    {id: "0705510120111", state:"on"},
    {id: "0701011110511-6", state:"off"},
    {id: "0701511120211", state:"on"},
    {id: "0701611120211", state:"on"},
    {id: "0700911110611-2", state:"off"},
    {id: "0701811220711", state:"on"},
    {id: "0701911220711", state:"on"},
    {id: "0700311120311", state:"on"},
    {id: "0700211120311", state:"on"},
    {id: "0700911110611-7", state:"off"},
    {id: "layer1-6", state:"on"},
    {id: "0702311210211", state:"on"},
    {id: "0702511210221", state:"on"},
    {id: "0702711210231-7", state:"on"},
    {id: "0702911210241-3", state:"on"},
    {id: "0702411210211", state:"on"},
    {id: "0702611210221", state:"on"},
    {id: "0702811210231-2", state:"on"},
    {id: "0703011210241", state:"on"},
    {id: "0703111210311", state:"on"},
    {id: "0703311210321", state:"on"},
    {id: "0703511210331", state:"on"},
    {id: "0703711210341", state:"on"},
    {id: "0703211210311", state:"on"},
    {id: "0703411210321", state:"on"},
    {id: "0703611210331", state:"on"},
    {id: "0703811210341", state:"on"},
    {id: "0703911220511", state:"on"},
    {id: "0704111220521", state:"on"},
    {id: "0704311220531", state:"on"},
    {id: "0704511220541", state:"on"},
    {id: "0704011220511", state:"on"},
    {id: "0704211220521", state:"on"},
    {id: "0704411220531", state:"on"},
    {id: "0704611220541", state:"on"},
    {id: "0704711220611", state:"on"},
    {id: "0704911220621", state:"on"},
    {id: "0705111220631", state:"on"},
    {id: "0705311220641", state:"on"},
    {id: "0704811220611", state:"on"},
    {id: "0705011220621", state:"on"},
    {id: "0705211220631", state:"on"},
    {id: "0705411220641", state:"on"},
]

const red = "#ff0000";
const green = "#008000";

//Группы линий
const infoLine = [
    {id: "ln700211110411", color: red},
    {id: "g2274", color: green},
    {id: "ln2701711220011", color: red},
    {id: "ln0700511110011", color: red},
    {id: "ln0700611210011", color: red},
    {id: "ln0700111120311", color: red},
    {id: "g2713", color: red},
    {id: "g2290", color: red},
    {id: "ln0700711110611", color: green},
    {id: "ln0701011210111", color: red},
    {id: "g2750", color: green},
    {id: "g2754", color: green},
    {id: "g1447", color: green},
    {id: "g1443", color: green},
    {id: "ln0701211120711", color: red},
    {id: "g2733", color: red},
    {id: "g2296", color: red},
    {id: "ln0701411210011", color: red},
]

//Одиночные линии
const infoPath = [
    {id: "ln0700811110511", color: red},
    {id: "path5319-3-13-9-32-4-5-4-8-0-5-8-5", color: green},
    {id: "path5319-3-13-9-32-4-5-4-8-0-2-4-7", color: green},
    {id: "path5319-3-13-9-32-4-5-4-8-0-5-8-5-8-1-5-4", color: green},
    {id: "path5319-3-13-9-32-4-5-4-8-0-5-8-5-8-5-0", color: green},
    {id: "path5319-3-13-9-32-4-5-4-8-0-2-4-7-3", color: green},
    {id: "path5319-3-13-9-32-4-5-4-8-0-2-4-7-27", color: green},
    {id: "path5319-3-13-9-32-4-5-4-8-0-5-4-5-4-4-4-8", color: red},
    {id: "ln700211120311", color: red},
    {id: "path5319-3-13-9-32-4-5-4-8-0-5-4-5-4-4-4", color: red},
    {id: "ln0700411110411", color: red},
    {id: "ln0701111120211", color: red},
    {id: "path5319-3-13-9-32-4-5-4-8-0-2-4-7-5", color: green},
    {id: "ln0701511210411", color: green},
    {id: "ln0701611210411", color: green},
    {id: "path5319-3-13-9-32-4-5", color: red},
    {id: "path5319-3-8", color: red},
    {id: "ln0701911210221", color: red},
    {id: "ln0701811210211", color: red},
    {id: "ln0702011210231", color: red},
    {id: "path5319-0-3-5", color: red},
    {id: "ln0702211210311", color: red},
    {id: "ln0702311210321", color: red},
    {id: "ln0702411210331", color: red},
    {id: "ln0702511210341", color: red},
    {id: "ln0702611220511", color: red},
    {id: "ln0702711220521", color: red},
    {id: "ln0702811220532", color: red},
    {id: "ln0702911220541", color: red},
    {id: "ln0703011220611", color: red},
    {id: "ln0703111220621", color: red},
    {id: "ln0703211220631", color: red},
    {id: "ln0703311220641", color: red},
    {id: "ln0703411220511", color: red},
    {id: "ln0703511220511", color: red},
    {id: "ln0703611220521", color: red},
    {id: "ln0703711220521", color: red},
    {id: "ln0703811220531", color: red},
    {id: "ln0703911220531", color: red},
    {id: "ln0704011220541", color: red},
    {id: "ln0704111220541", color: red},
    {id: "ln070411220541", color: red},
    {id: "ln0704311220611", color: red},
    {id: "ln0704411220621", color: red},
    {id: "ln0704511220621", color: red},
    {id: "ln0704611220631", color: red},
    {id: "ln0704711220631", color: red},
    {id: "ln0704811220641", color: red},
    {id: "ln0704911220641", color: red},
]

//Начальное состояние ячеек на схеме
export default function defaultSettings(doc, docG)
{
    for (var item of docG)
    {
        var id = "";
        var state;

        //Ячейки
        for (var item2 of infoState)
        {
            if (item.getAttribute("id") == item2.id)
            {
                item.setAttribute("state", item2.state);
                
                id = item2.id;
                state = item2.state;
            }        
        }

        //Группы линий
        for (var item2 of infoLine)
        {
            if (item.getAttribute("id") == item2.id)
            {

                var itemPath = doc.getElementById(item2.id).querySelectorAll("path");   

                for (var item3 of itemPath)
                {
                    item3.style.stroke = item2.color;
                }
                //var item = item.querySelectorAll("path");
                
                      
            }        
        }
        console.log(item);
        if (id != "")
        {
            clickRect(id, state);
        }
    }

    //Одиночные линии
    var docP = doc.querySelectorAll("path")
    for (var item of docP)
    {
        for (var item2 of infoPath)
        {
            if (item.getAttribute("id") == item2.id)
            {
                item.style.stroke = item2.color;
            }
        }
    }
}