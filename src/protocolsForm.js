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

import OperatingMode23 from './Operating modes/operatingMode23.js';

var excelData;

//Протоколы
export default class ProtocolsForm extends React.Component
{
    constructor()
    {
        super();
        
        this.state = {
            open: false,
        }

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.lol = this.lol.bind(this);
    }

    

    handleClickOpen = () =>
    {
        this.setState({open: true});
        setTimeout(() =>
        {
            document.getElementById("protocols").hidden = false;
        }, 100)
    };

    handleClose = () =>
    {
        this.setState({open: false});
        document.getElementById("protocols").hidden = false;
    };

    lol = () =>
    {
        document.getElementById("protocols").hidden = true;
    }

    render()
    {

        return(
            <div>
                <button onClick={this.handleClickOpen} style={{width:"50px", height:"15px", marginBottom:"4px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>Ручной</button>
                <Dialog open={this.state.open} onClose={this.handleClose} onClick={this.lol} id="protocols" style={{right:"1200px", bottom:"200px", width:"50%"}}>
                    
                    <DialogContent style={{backgroundColor:"#f0f0f0"}}>
                        <div>
                            <table>

                                <tr align="center">
                                    <th colspan="2">
                                        <p style={{fontSize:11}}>Режимы работы ТП-51</p>
                                    </th>
                                </tr>

                                {/* <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}><span style={{color:"red"}}>1.</span></button>
                                    </td>
                                    <td >
                                        <p style={{color:"red"}}>Нормальный режим работы</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                        <p align="center" style={{fontWeight:"500"}}>2.</p>
                                    </td>
                                    <td>
                                        <p>Отключение от нормального режима работы</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>2.1</button>
                                    </td>
                                    <td>
                                        <p>От одного высоковольтного ввода №1 с двумя трансформаторами</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>2.2</button>
                                    </td>
                                    <td>
                                        <p>От одного высоковольтного ввода №2 с двумя трансформаторами</p>
                                    </td>
                                </tr>
                                <OperatingMode23/>  

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>2.4</button>
                                    </td>
                                    <td>
                                        <p>От одного высоковольтного ввода №1 со вторым трансформаторами</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>2.5</button>
                                    </td>
                                    <td>
                                        <p>От одного высоковольтного ввода №2 с первым трансформаторами</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>2.6</button>
                                    </td>
                                    <td>
                                        <p>От одного высоковольтного ввода №2 со вторым трансформаторами</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>2.7</button>
                                    </td>
                                    <td>
                                        <p>Отключение питающей КЛ от ТП-50, ячейка 1</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>2.8</button>
                                    </td>
                                    <td>
                                        <p>Отключение питающей КЛ от ТП-50, ячейка 6</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                        <p align="center" style={{fontWeight:"500"}}>3.</p>
                                    </td>
                                    <td>
                                        <p>Отключение секций шин 0.4 кВ</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>3.1</button>
                                    </td>
                                    <td>
                                        <p>Отключение I секций шин 0.4 кВ</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>3.2</button>
                                    </td>
                                    <td>
                                        <p>Отключение II секций шин 0.4 кВ</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>3.3</button>
                                    </td>
                                    <td>
                                        <p>Отключение I и II секций шин 0.4 кВ</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>3.4</button>
                                    </td>
                                    <td>
                                        <p>Полное отключение ТП-51</p>
                                    </td>
                                </tr>

                                <tr style={{verticalAlign:"top"}}>
                                    <td width="5%">
                                    <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>4.</button>
                                    </td>
                                    <td>
                                        <p>Отключение потребителей</p>
                                    </td>
                                </tr> */}
                                {createLine(this.props.data)}
                            </table>
                        </div>
                    </DialogContent>
                    <DialogActions style={{backgroundColor:"#f0f0f0"}}>
                        <button onClick={this.handleClose} style={{boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500", textAlign:"center", fontSize:10}}>Выйти</button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function createLine(data)
{

    var lines = [];
    var lastNumber;
    console.log("lol");
    for (var i = 0; i < data.length; i++)
    {
        lastNumber = data[i][0];
    }
    for (var i = 0; i < data.length; i++)
    {
        //console.log(data[i]);
        var line;
        if (data[i][0] === "№")
        {
            i++;
            var j = 1;
            while (data[i][0] === j)
            {
                i++;
                j++;
            }
        };
        if (data[i][0] != lastNumber && data[i][0].toString().match(/[0-9]./))
        {
            var index = i;
            var dataLines = [];
            if (data[index + 1][0] === "№")
            {
                index++;
                var j = 1;
                while (data[index + 1][0] === j)
                {
                    var myState = (data[index + 1][6] === null) ? "ВЫКЛ" : "ВКЛ";
                    var dataLine = JSON.stringify({
                        number: data[index + 1][0],
                        element: data[index + 1][1],
                        voltage: data[index + 1][2],
                        tireSection: data[index + 1][3],
                        cell: data[index + 1][4],
                        feeder: data[index + 1][5],
                        state: myState,
                        id: data[index + 1][8],
                    });
                    index++;
                    j++;
                    dataLines[dataLines.length] = dataLine;  
                }
            };

            line = <OperatingMode23 data1={data[i][0]} data2={data[i][1]} dataLines={dataLines}/>;
        }else
        {
            line = 
            <tr style={{verticalAlign:"top"}}>
                <td width="5%">
                <button style={{width:"30px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500", fontSize:10}}><span style={{color:(data[i][0] === "1.") ? "red": "black"}}>{data[i][0]}</span></button>
                </td>
                <td>
                    <p style={{color:(data[i][0] === "1.") ? "red": "black", fontSize:10, fontWeight:"500"}}>{data[i][1]}</p>
                </td>
            </tr>
        }
        lines[lines.length] = line;   
    }

    return lines;
}