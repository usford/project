export default function start()
{
    const WebSocket = require('ws');

    const wss = new WebSocket.Server({ port: 3001 });
    wss.on('connection', ws => 
    {
        ws.on('message', message => 
        {
        const data = JSON.parse(message);

        var xlsx = require('xlsx-populate');

        xlsx.fromFileAsync("info.xlsx")
            .then(workbook => {
                const value = workbook.sheet("Лист1").usedRange().value();
                console.log(value);

                ws.send(JSON.stringify(
                    {
                    type: "excel",
                    data: value
                    }));
            });
        })
    });
}

