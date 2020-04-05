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
import { Container } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';

import Journal from './journal.js';
import ProtocolsForm from './protocolsForm.js';

//Протоколы
export default class BottomPanel extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            manual: false,
            auto: false,
            reserve: false,
            avr: false,
            myPusk: false
        }

        this.changeManual = this.changeManual.bind(this);
        this.changeAuto = this.changeAuto.bind(this);
        this.changeReserve = this.changeReserve.bind(this);
        this.changeAvr = this.changeAvr.bind(this);
        this.pusk = this.pusk.bind(this);
    }

    changeManual = () =>
    {
        this.setState({manual: !this.state.manual});
    }

    changeAuto = () =>
    {
        this.setState({auto: !this.state.auto});
    }

    changeReserve = () =>
    {
        this.setState({reserve: !this.state.reserve});
    }

    changeAvr = () =>
    {
        this.setState({avr: !this.state.avr});
    }

    pusk = () =>
    {
        this.setState({myPusk: !this.state.myPusk});
    }

    render()
    {
        return(

                <Row>
                    <Col xs="3" style={{border: "1px solid black", fontSize:9, backgroundColor: "#f0f0f0", marginRight:"20px", marginLeft:"30px", fontWeight:"500", width:"10%", height:"10%"}}>
                        <Row>
                            <Col align="center">
                            <p style={{position:"absolute", right:"100px", bottom:"65px", backgroundColor:"#f0f0f0", marginLeft:"130px"}}>Управление</p>
                                <div style={{marginTop:"10px"}}>  
                                    
                                    <p align="center" style={{margin:0, padding:0}}>Режимы работы устан. в ТП</p>
                                    <input value="Ручной" size="20" style={{boxShadow: "-0.2px -0.2px", height:"15px"}}></input>
                                    <input value="Местный" size="20" style={{marginBottom:"10px", marginTop:"5px", boxShadow: "-0.2px -0.2px", height:"15px"}}></input>
                                    <button style={{width:"130px", height:"15px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>Выход в главное меню</button>
                                </div>
                            </Col>
                            <Col>
                                <p align="center" style={{margin:0, padding:0}}>Режимы управления схемой</p>
                                <Row>
                                    <Col align="center">
                                        
                                        <ProtocolsForm data={this.props.data}/>
                                    </Col>
                                    <Col align="center">
                                        <input value={(this.state.manual === true) ? "ВКЛ." : "ОТКЛ."} size="2" style={{boxShadow: "-0.2px -0.2px", height:"15px"}}></input>
                                    </Col>

                                    <Col align="center">
                                        <button onClick={this.changeAuto} style={{width:"50px", height:"15px", marginBottom:"4px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>Автомат.</button>
                                    </Col>
                                    <Col align="center">
                                        <input value={(this.state.auto === true) ? "ВКЛ." : "ОТКЛ."} size="2" style={{boxShadow: "-0.2px -0.2px", height:"15px"}}></input>
                                    </Col>

                                    <Col align="center">
                                        <button onClick={this.changeReserve} style={{width:"50px", height:"15px", marginBottom:"4px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>Резерв</button>
                                    </Col>
                                    <Col align="center">
                                        <input value={(this.state.reserve === true) ? "ВКЛ." : "ОТКЛ."} size="2" style={{boxShadow: "-0.2px -0.2px", height:"15px"}}></input>
                                    </Col>

                                    <Col align="center">
                                        <button onClick={this.changeAvr} style={{width:"50px", height:"15px", marginBottom:"4px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500"}}>АВР</button>
                                    </Col>
                                    <Col align="center">
                                        <input value={(this.state.avr === true) ? "ВКЛ." : "ОТКЛ."} size="2" style={{boxShadow: "-0.2px -0.2px", height:"15px"}}></input>
                                    </Col>
                                </Row>
                            </Col>
                            <Col align="center">
                                <p align="center" style={{fontWeight:"500", margin:0, padding:0}}>Время опроса счетчиков</p>
                                <input value="27.02.2020 17:03" style={{boxShadow: "-0.2px -0.2px", height:"15px"}}></input>   
                                <p align="center" style={{fontWeight:"500", margin:0, padding:0}}>Установка времени</p>
                                <input value="27.02.2020 17:03" style={{boxShadow: "-0.2px -0.2px", height:"15px"}}></input> 
                                <button onClick={this.pusk} style={{marginTop:"10px", boxShadow: "1.5px 1.5px", border: "none", fontWeight:"500", height:"15px", margin:0, padding:0, width:"90px"}}>Пуск опроса</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col style={{width: "50%", overflow: "auto", border: "1px solid black", backgroundColor: "#f0f0f0", marginLeft:"130px", paddingRight:"20px"}}>
                        <Journal/>
                    </Col>
                    <Col></Col>
                </Row>
        );
    }
}

//<button onClick={this.changeManual} style={{width:"80px", height:"30px", marginBottom:"4px", boxShadow: "1.5px 1.5px", border: "none"}}>Ручной</button>