import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

var myData = [];

//Протоколы
export default class Journal extends React.Component
{
    constructor()
    {
        super();
        
        this.state = {
            open: false,
            data: {}
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen = () =>
    {
        this.setState({open: true});
    };

    handleClose = () =>
    {
        this.setState({open: false});
    };
    
    render()
    {
        var db = openDatabase("mydb", "0.1", "A list of to do items.", 200000);
        db.transaction(function(tx)
        {
            tx.executeSql("SELECT * FROM dataJournal4", [], function(tx, result)
            {
                createLine(result);
            }, null)
        })

        return(
            <div style={{height:"73px"}}>
                <table border="1" style={{fontSize: 11, backgroundColor: "white"}}>
                    <thead>
                        <tr>
                            <th>
                                Дата
                            </th>
                            <th>
                                Время
                            </th>
                            <th>
                                Объект
                            </th>
                            <th>
                                Секция шин
                            </th>
                            <th>
                                Ячейка
                            </th>
                            <th>
                                Напряжение
                            </th>
                            <th>
                                Элемент
                            </th>
                            <th>
                                Состояние
                            </th>
                            <th>
                                Плакат
                            </th>
                            <th>
                                Ответственный
                            </th>
                            <th>
                                Диспетчер
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {myData}
                    </tbody>
                </table>
            </div>
        );
    }
}

function createLine(result)
{   
    var line;
    myData = [];
    for (var i = 0; i < result.rows.length; i++)
    {
        line = <tr align="center">
            <td>
                {result.rows.item(i)["date"]}
            </td>
            <td>
                {result.rows.item(i)["time"]}
            </td>
            <td>
                {result.rows.item(i)["object"]}
            </td>
            <td>
                {result.rows.item(i)["tireSection"]}
            </td>
            <td>
                {result.rows.item(i)["cell"]}
            </td>
            <td>
                {result.rows.item(i)["voltage"]}
            </td>
            <td>
                {result.rows.item(i)["element"]}
            </td>
            <td>
                {result.rows.item(i)["state"]}
            </td>
            <td>
                {result.rows.item(i)["poster"]}
            </td>
            <td>
                {result.rows.item(i)["responsible"]}
            </td>
            <td>
                {result.rows.item(i)["dispatcher"]}
            </td>
        </tr>

        myData[myData.length] = line;
    }
}

//<button onClick = {this.handleClickOpen}>Обновить</button>  