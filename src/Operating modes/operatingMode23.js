import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

import {clickRect} from '../App';

var counter = 1;
var timeOut;
var wrongText = "";
var colorConfrim = "#808080";

var firstState;
var firstID;


function PaperComponent(props) 
{
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
        </Draggable>
    );
}

function clickBtn(firstStateID, poster, password, dispatcher, responsible, id, state, line)
{
    counter++;
    clearInterval(timeOut);
    var now = new Date();
    line = JSON.parse(line);



    if (poster === "" 
        || password === "" 
        || dispatcher === "" 
        || responsible === "" )
    {
        alert("Заполните все поля");
        return;
    }

    if (password != "12345")
    {
        alert("Неверный пароль");
        return;
    }

    var db = openDatabase("mydb", "0.1", "A list of to do items.", 200000);
    if(!db){alert("Failed to connect to database.");}

    db.transaction(function(tx) 
    {
        tx.executeSql("CREATE TABLE IF NOT EXISTS dataJournal4 ( \
            id REAL UNIQUE, \
            date TEXT, \
            time TEXT, \
            object TEXT, \
            tireSection TEXT, \
            cell TEXT, \
            voltage TEXT, \
            element TEXT, \
            state TEXT, \
            poster TEXT, \
            responsible TEXT, \
            dispatcher TEXT)")
    });

    db.transaction(function(tx) 
    {
        tx.executeSql("SELECT COUNT(*) FROM dataJournal4", [], function (result) {}, function (tx, error) {
            tx.executeSql("CREATE TABLE dataJournal1 ( \
                id REAL UNIQUE, \
                date TEXT, \
                time TEXT \
                object TEXT, \
                tireSection TEXT, \
                cell TEXT, \
                voltage TEXT, \
                element TEXT, \
                state TEXT, \
                poster TEXT, \
                responsible TEXT, \
                dispatcher TEXT)", [], null, null);
    })});

    db.transaction(function(tx)
    {
        tx.executeSql("INSERT INTO dataJournal4 (date, time, object, tireSection, cell, voltage, element, state, poster, responsible, dispatcher) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
        [`${now.getDate()}.0${now.getMonth()+1}.${now.getFullYear()}`, `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`, line.object, line.tireSection, line.cell, line.voltage, line.element, line.state, line.poster, line.responsible, line.dispatcher])
    });

    // db.transaction(function(tx)
    // {
    //     tx.executeSql("SELECT * FROM dataJournal2", [], function(tx, result)
    //     {
    //         for (var i = 0; i < result.rows.length; i++)
    //         {
    //             //alert(result.rows.item(i)["date"]);
    //         }
    //     }, null)
    // })
   

    clickRect(id, state);
    var doc = document.getElementById('svgObject').contentDocument;
    firstID = firstStateID;
    firstState = doc.getElementById(firstStateID).getAttribute("state");
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: " + firstState);
}

function changeColor(id, state, curState)
{    
    curState = (curState === "ВКЛ") ? "on" : "off";
    state = (state === "undefined") ? curState : "undefined";
    clickRect(id, state);
}
//Протоколы
export default class OperatingMode23 extends React.Component
{

    constructor()
    {
        super();
        
        this.state = {
            open: false,
            poster: "",
            responsible: "",
            dispatcher: "",
            password: "",
            counter: 1,
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.deleteShadow = this.deleteShadow.bind(this);
        this.handleChangePoster = this.handleChangePoster.bind(this);
        this.handleChangeResponsible = this.handleChangeResponsible.bind(this);
        this.handleChangeDispatcher = this.handleChangeDispatcher.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.lol = this.lol.bind(this);
    }

    handleClickOpen = () =>
    {
        this.setState({open: true});

        //Сохранение состояния текущего элемента
        var doc = document.getElementById('svgObject').contentDocument;
        var dataLine = JSON.parse(this.props.dataLines[counter - 1]);
        firstState = doc.getElementById(dataLine.id).getAttribute("state");
        firstID = dataLine.id;
        //console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA: " + firstState);
    };

    handleClose = () =>
    {
        this.setState({open: false, counter: 1});
        clearInterval(timeOut);
        counter = 1;
        //changeColor(firstID, doc.getElementById(firstID).getAttribute("state"), dataLine.state)
        clickRect(firstID, firstState);
    };

    deleteShadow = () =>
    {
        var doc = document.getElementById("shadow");
        var docQ = doc.querySelector('div');
        docQ.remove();
    };

    handleChangePoster(event)
    {
        this.setState({poster: event.target.value});
    }

    handleChangeResponsible(event)
    {
        this.setState({responsible: event.target.value});
    }

    handleChangeDispatcher(event)
    {
        this.setState({dispatcher: event.target.value});
    }

    handleChangePassword(event)
    {
        this.setState({password: event.target.value});
    }

    handleConfirm = () =>
    {
        if (counter - 1 == this.props.dataLines.length)
        {
            this.setState({open: false, counter: 1});
            clearInterval(timeOut);
            counter = 1;
        }
    };

    lol = () =>
    {
        this.setState({counter: parseInt(counter)});
    }

    render()
    {
        if (this.state.open != false)
        {
            
            for (var i = 1; i <= this.props.dataLines.length; i++)
            {
                if (this.state.counter === i)
                {
                    var dataLine = JSON.parse(this.props.dataLines[i - 1]);
                    //console.log("-------------------------------------------");
                    //console.log(counter);
                    //console.log(i);
                    //console.log(dataLine);
                    //console.log("-------------------------------------------");
                    clearInterval(timeOut);
                    var doc = document.getElementById('svgObject').contentDocument;
                    timeOut = setInterval(() => changeColor(dataLine.id, doc.getElementById(dataLine.id).getAttribute("state"), dataLine.state), 500);
                }
            }
            // if (counter === 1)
            // {
            //     clearInterval(timeOut);
            //     var doc = document.getElementById('svgObject').contentDocument;
            //     timeOut = setInterval(() => changeColor("0702111210412", doc.getElementById("0702111210412").getAttribute("state"), "on"), 1000);
            // }else if (this.state.counter === 2)
            // {
            //     clearInterval(timeOut);
            //     var doc = document.getElementById('svgObject').contentDocument;
            //     timeOut = setInterval(() => changeColor("0701811220711", doc.getElementById("0701811220711").getAttribute("state"), "off"), 1000);
            // }else if (this.state.counter === 3)
            // {
            //     clearInterval(timeOut);
            //     var doc = document.getElementById('svgObject').contentDocument;
            //     timeOut = setInterval(() => changeColor("0701911220711", doc.getElementById("0701911220711").getAttribute("state"), "off"), 1000);
            // }else if (this.state.counter === 4)
            // {
            //     clearInterval(timeOut);
            //     var doc = document.getElementById('svgObject').contentDocument;
            //     timeOut = setInterval(() => changeColor("0701511120211", doc.getElementById("0701511120211").getAttribute("state"), "off"), 1000);
            // }else if (this.state.counter === 5)
            // {
            //     clearInterval(timeOut);
            //     var doc = document.getElementById('svgObject').contentDocument;
            //     timeOut = setInterval(() => changeColor("0700311120311", doc.getElementById("0700311120311").getAttribute("state"), "off"), 1000);
            // }else if (this.state.counter === 6)
            // {
            //     clearInterval(timeOut);
            //     var doc = document.getElementById('svgObject').contentDocument;
            //     timeOut = setInterval(() => changeColor("0700211120311", doc.getElementById("0700211120311").getAttribute("state"), "off"), 1000);
            // }
        }
        console.log(this.props.dataLines.length);

        return(
            <tr style={{verticalAlign:"top"}}>
                <td width="5%">
                    <button onClick={this.handleClickOpen} style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500", textAlign:"center", fontSize:10}}>{this.props.data1}</button>
                </td>
                <td>
                    <p style={{fontSize:10, fontWeight:"500"}}>{this.props.data2}</p>
                </td>
                <Dialog onClick={this.lol} style={{right:"1200px", bottom:"200px", width:"50%"}} open={this.state.open} onClose={this.handleClose} PaperComponent={PaperComponent} disableEscapeKeyDown={true} disableBackdropClick={true} id="shadow" onEnter={this.deleteShadow}>
                    <DialogTitle style={{ cursor: 'move', backgroundColor:"#f0f0f0" }} id="draggable-dialog-title">Управление объектом</DialogTitle>
                    <DialogContent style={{backgroundColor:"#f0f0f0", fontWeight:"500"}}>
                        <div align="center">
                            <p>Выбранный режим работы ТП-51</p>

                            <p>{this.props.data1} {this.props.data2}</p>

                            <p>Протокол перехода в режим</p>

                            <table border="1" width="100%">
                                {createLine("№", 
                                    "Эл-т", 
                                    "U кВ", 
                                    "Сш", 
                                    "Ячейка", 
                                    "Фидер", 
                                    "ВКЛ", 
                                    "ВЫКЛ")}
                                {createLines(this.props.dataLines, this.state.poster, this.state.password, this.state.dispatcher, this.state.responsible)}
                                
                            </table>

                            <p>Получено:</p>

                            <p style={{color: "red"}}>{wrongText}</p>

                            <table width="100%">
                                <tr align="center">
                                    <td width="50%">
                                        Плакат
                                    </td>
                                    <td width="50%">
                                        Ответственный
                                    </td>
                                </tr>
                                <tr align="center">
                                    <td width="50%">
                                        <input type="text" value={this.state.poster} onChange={this.handleChangePoster} style={{boxShadow: "-0.2px -0.2px"}}></input>
                                    </td>
                                    <td width="50%">
                                        <input type="text" value={this.state.responsible} onChange={this.handleChangeResponsible} style={{boxShadow: "-0.2px -0.2px"}}></input>
                                    </td>
                                </tr>
                                <tr align="center">
                                    <td width="50%">
                                        Диспетчер
                                    </td>
                                    <td width="50%">
                                        Пароль
                                    </td>
                                </tr>
                                <tr align="center">
                                    <td width="50%">
                                        <input type="text" value={this.state.dispatcher} onChange={this.handleChangeDispatcher} style={{boxShadow: "-0.2px -0.2px"}}></input>
                                    </td>
                                    <td width="50%">
                                        <input type="password" value={this.state.password} onChange={this.handleChangePassword} style={{boxShadow: "-0.2px -0.2px"}}></input>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </DialogContent>
                    <DialogActions style={{backgroundColor:"#f0f0f0"}}>
                        <button onClick={this.handleConfirm} style={{boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500", textAlign:"center", color:colorConfrim}}>Подтвердить</button>
                    </DialogActions>
                    <DialogActions style={{backgroundColor:"#f0f0f0"}}>
                        <button onClick={this.handleClose} style={{boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500", textAlign:"center"}}>Выйти</button>
                    </DialogActions>
                </Dialog>
            </tr>
        );
    }
}

function createLines(dataLines, poster, password, dispatcher, responsible)
{
    var lines = [];
    var myCounter = 2;
    
    for (var i = 0; i < dataLines.length; i++)
    {
        var dataLine = JSON.parse(dataLines[i]);

        if (i + 1 < dataLines.length)
            var dataLineState = JSON.parse(dataLines[i + 1]);

        //console.log(dataLine);
        //console.log(dataLine.state);
        var lol = createLine(dataLine.number, 
        <button firstStateID={dataLineState.id} length={dataLines.length} lineID={dataLine.id} tireSection={dataLine.tireSection} cell={dataLine.cell} voltage={dataLine.voltage} element={dataLine.element} state={dataLine.state} myCounter={myCounter} onClick={(e) =>
        {    
            var id = e.target.getAttribute("lineID");
            var tireSection = e.target.getAttribute("tireSection");
            var cell = e.target.getAttribute("cell");
            var voltage = e.target.getAttribute("voltage");
            var element = e.target.getAttribute("element");
            var state = e.target.getAttribute("state");
            var myCounter = e.target.getAttribute("myCounter");
            var length = e.target.getAttribute("length");
            var firstStateID = e.target.getAttribute("firstStateID");
            //[now, "object", "tireSection", "cell", "voltage", "element", "state", "poster", "responsible", "dispatcher"]
            if (dispatcher === ""){
                wrongText = "Заполните все поля"
                return;
            }else if (password != 12345)
            {
                wrongText = 'Неверно введённый пароль';
                return;
            }
            if (counter != myCounter - 1){
                wrongText = "Вы идёте не по порядку";
                return;
            }
            wrongText = "";
            clickBtn(firstStateID,
                poster, 
                password, 
                dispatcher, 
                responsible, 
                id, 
                (state === "ВКЛ") ? "on" : "off",
                JSON.stringify(
                    {
                        object: "ТП-51",
                        tireSection: tireSection,
                        cell: cell,
                        voltage: voltage,
                        element: element,
                        state: (state === "ВКЛ") ? "ВКЛЮЧЕН" : "ВЫКЛЮЧЕН",
                        poster: poster,
                        responsible: responsible,
                        dispatcher: dispatcher
                    }
                ));
                counter = myCounter;

                if (counter - 1 == length)
                {
                    colorConfrim = "black";
                }
            
        }} style={{width:"40px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>{dataLine.element}</button>, 
        dataLine.voltage, 
        dataLine.tireSection, 
        dataLine.cell, 
        dataLine.feeder, 
        (dataLine.state === "ВКЛ") ? "Х" : "", 
        (dataLine.state === "ВЫКЛ") ? "Х" : "");

        lines[lines.length] = lol;
        myCounter++;
    }   

    return lines
}

function createLine(elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8)
{
    //console.log(elem1 + "!!!!!!!!!!!!" + `${counter}`)
    const line = 
    <tr align="center" style={{background: (counter == elem1 || elem1 === "№") ? "none" : "gray"}}>
        <td>
            {elem1}
        </td>
        <td>
            {elem2}
        </td>
        <td>
            {elem3}
        </td>
        <td>
            {elem4}
        </td>
        <td>
            {elem5}
        </td>
        <td>
            {elem6}
        </td>
        <td>
            {elem7}
        </td>
        <td>
            {elem8}
        </td>
    </tr>

    return line;
}

// {createLine("1.", 
//                                     <button onClick={() =>
//                                     {
//                                         //[now, "object", "tireSection", "cell", "voltage", "element", "state", "poster", "responsible", "dispatcher"]
//                                         if (this.state.dispatcher === ""){
//                                             alert('Заполните все поля');
//                                             return;
//                                         }else if (this.state.password != 12345)
//                                         {
//                                             alert('Неверно введённый пароль');
//                                             return;
//                                         }
//                                         if (counter != 1){
//                                             alert("Вы идёте не по порядку");
//                                             return;
//                                         }
//                                         clickBtn(this.state.poster, 
//                                             this.state.password, 
//                                             this.state.dispatcher, 
//                                             this.state.responsible, 
//                                             "0702111210412", 
//                                             "on",
//                                             JSON.stringify(
//                                                 {
//                                                     object: "ТП-51",
//                                                     tireSection: "1",
//                                                     cell: "4",
//                                                     voltage: "0.4",
//                                                     element: "АВ",
//                                                     state: "ВКЛЮЧЕН",
//                                                     poster: this.state.poster,
//                                                     responsible: this.state.responsible,
//                                                     dispatcher: this.state.dispatcher
//                                                 }
//                                             ));
//                                             this.setState({counter: 2});
//                                             counter = 2;
                                        
//                                     }} style={{width:"40px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>АВ</button>, 
//                                     "0.4", 
//                                     "1", 
//                                     "4", 
//                                     "1", 
//                                     "Х", 
//                                     "")}
//                                 {createLine("2.", 
//                                     <button onClick={() =>
//                                         {
//                                             if (this.state.dispatcher === ""){
//                                                 alert('Заполните все поля');
//                                                 return;
//                                             }else if (this.state.password != 12345)
//                                             {
//                                                 alert('Неверно введённый пароль');
//                                                 return;
//                                             }
//                                             if (counter != 2){
//                                                 alert("Вы идёте не по порядку");
//                                                 return;
//                                             }
//                                             clickBtn(this.state.poster, 
//                                                 this.state.password, 
//                                                 this.state.dispatcher, 
//                                                 this.state.responsible, 
//                                                 "0701811220711", 
//                                                 "off",
//                                                 JSON.stringify(
//                                                     {
//                                                         object: "ТП-51",
//                                                         tireSection: "2",
//                                                         cell: "7",
//                                                         voltage: "0.4",
//                                                         element: "АВ",
//                                                         state: "ВЫКЛЮЧЕН",
//                                                         poster: this.state.poster,
//                                                         responsible: this.state.responsible,
//                                                         dispatcher: this.state.dispatcher
//                                                     }
//                                                 ));
//                                                 this.setState({counter: 3});
//                                                 counter = 3;
//                                         }} style={{width:"40px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>АВ</button>, 
//                                     "0.4", 
//                                     "2", 
//                                     "7", 
//                                     "1",
//                                     "", 
//                                     "X")}
//                                 {createLine("3.",
//                                     <button onClick={() =>
//                                         {
//                                             if (this.state.dispatcher === ""){
//                                                 alert('Заполните все поля');
//                                                 return;
//                                             }else if (this.state.password != 12345)
//                                             {
//                                                 alert('Неверно введённый пароль');
//                                                 return;
//                                             }
//                                             if (counter != 3){
//                                                 alert("Вы идёте не по порядку");
//                                                 return;
//                                             }
//                                             clickBtn(this.state.poster, 
//                                                 this.state.password, 
//                                                 this.state.dispatcher, 
//                                                 this.state.responsible, 
//                                                 "0701911220711", 
//                                                 "off",
//                                                 JSON.stringify(
//                                                     {
//                                                         object: "ТП-51",
//                                                         tireSection: "2",
//                                                         cell: "7",
//                                                         voltage: "0.4",
//                                                         element: "Р",
//                                                         state: "ВЫКЛЮЧЕН",
//                                                         poster: this.state.poster,
//                                                         responsible: this.state.responsible,
//                                                         dispatcher: this.state.dispatcher
//                                                     }
//                                                 ));
//                                                 this.setState({counter: 4});
//                                                 counter = 4;
                                            
//                                         }} style={{width:"40px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>Р</button>,  
//                                     "0.4", 
//                                     "2", 
//                                     "7", 
//                                     "1", 
//                                     "", 
//                                     "X")}
//                                 {createLine("4.", 
//                                     <button onClick={() =>
//                                         {
//                                             if (this.state.dispatcher === ""){
//                                                 alert('Заполните все поля');
//                                                 return;
//                                             }else if (this.state.password != 12345)
//                                             {
//                                                 alert('Неверно введённый пароль');
//                                                 return;
//                                             }
//                                             if (counter != 4){
//                                                 alert("Вы идёте не по порядку");
//                                                 return;
//                                             }
//                                             clickBtn(this.state.poster, 
//                                                 this.state.password, 
//                                                 this.state.dispatcher, 
//                                                 this.state.responsible, 
//                                                 "0701511120211", 
//                                                 "off",
//                                                 JSON.stringify(
//                                                     {
//                                                         object: "ТП-51",
//                                                         tireSection: "2",
//                                                         cell: "2",
//                                                         voltage: "6.0",
//                                                         element: "ВН",
//                                                         state: "ВЫКЛЮЧЕН",
//                                                         poster: this.state.poster,
//                                                         responsible: this.state.responsible,
//                                                         dispatcher: this.state.dispatcher
//                                                     }
//                                                 ));
//                                                 this.setState({counter: 5});
//                                                 counter = 5;
                                            
//                                         }} style={{width:"40px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>ВН</button>,  
//                                     "6.0", 
//                                     "2", 
//                                     "2", 
//                                     "1", 
//                                     "", 
//                                     "X")}
//                                 {createLine("5.", 
//                                     <button onClick={() =>
//                                         {
//                                             if (this.state.dispatcher === ""){
//                                                 alert('Заполните все поля');
//                                                 return;
//                                             }else if (this.state.password != 12345)
//                                             {
//                                                 alert('Неверно введённый пароль');
//                                                 return;
//                                             }
//                                             if (counter != 5){
//                                                 alert("Вы идёте не по порядку");
//                                                 return;
//                                             }
//                                             clickBtn(this.state.poster, 
//                                                 this.state.password, 
//                                                 this.state.dispatcher, 
//                                                 this.state.responsible, 
//                                                 "0700311120311", 
//                                                 "off",
//                                                 JSON.stringify(
//                                                     {
//                                                         object: "ТП-51",
//                                                         tireSection: "2",
//                                                         cell: "3",
//                                                         voltage: "6.0",
//                                                         element: "ВВ",
//                                                         state: "ВЫКЛЮЧЕН",
//                                                         poster: this.state.poster,
//                                                         responsible: this.state.responsible,
//                                                         dispatcher: this.state.dispatcher
//                                                     }
//                                                 ));
//                                                 this.setState({counter: 6});
//                                                 counter = 6;
                                            
//                                         }} style={{width:"40px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>ВВ</button>,   
//                                     "6.0", 
//                                     "2",
//                                     "3", 
//                                     "1", 
//                                     "", 
//                                     "X")}
//                                 {createLine("6.", 
//                                     <button onClick={() =>
//                                         {
//                                             if (this.state.dispatcher === ""){
//                                                 alert('Заполните все поля');
//                                                 return;
//                                             }else if (this.state.password != 12345)
//                                             {
//                                                 alert('Неверно введённый пароль');
//                                                 return;
//                                             }
//                                             if (counter != 6){
//                                                 alert("Вы идёте не по порядку");
//                                                 return;
//                                             }
//                                             clickBtn(this.state.poster, 
//                                                 this.state.password, 
//                                                 this.state.dispatcher, 
//                                                 this.state.responsible, 
//                                                 "0700211120311", 
//                                                 "off",
//                                                 JSON.stringify(
//                                                     {
//                                                         object: "ТП-51",
//                                                         tireSection: "2",
//                                                         cell: "3",
//                                                         voltage: "6.0",
//                                                         element: "ЛР",
//                                                         state: "ВЫКЛЮЧЕН",
//                                                         poster: this.state.poster,
//                                                         responsible: this.state.responsible,
//                                                         dispatcher: this.state.dispatcher
//                                                     }
//                                                 ));

                                            
//                                         }} style={{width:"40px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>ЛР</button>,   
//                                     "6.0", 
//                                     "2", 
//                                     "3", 
//                                     "1", 
//                                     "", 
//                                     "X")}