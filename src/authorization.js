import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Начальная авторизация
export default class Authorization extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            login: "",
            password: "",
            open: true,
            wrongOpacity: 0,
            wrongFontSize: 1,
        }

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose()
    {
        var login = this.state.login;
        var password = this.state.password;

        if (login === "1" && password === "1")
            this.setState({open: false})
        else
            this.setState({wrongOpacity: 1, wrongFontSize: 12})
    }

    handleChangeLogin(event)
    {
        this.setState({login: event.target.value});
    }

    handleChangePassword(event)
    {
        this.setState({password: event.target.value});
    }
    

    render()
    {

        return(
            <div>
                <Dialog open={this.state.open} disableEscapeKeyDown={true} disableBackdropClick={true}>
                    <DialogTitle>Авторизация</DialogTitle>
                    <DialogContent>
                        <div>
                            <table>
                                <tr>
                                    <p style={{color: "red", opacity:this.state.wrongOpacity, fontSize:this.state.wrongFontSize}}>Неправильно введённый логин или пароль</p>
                                </tr> 
                                <tr>
                                    <p>Логин</p>
                                </tr> 
                                <tr>
                                    <input value={this.state.login} onChange={this.handleChangeLogin}></input>
                                </tr> 

                                <tr>
                                    <p>Пароль</p>
                                </tr> 
                                <tr>
                                    <input type="password" value={this.state.password} onChange={this.handleChangePassword}></input>
                                </tr> 
                            </table>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Войти
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}