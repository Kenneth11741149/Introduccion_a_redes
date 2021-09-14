import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import Paypal from "./PaypalButton"
import Context from '../Context.js';

export default class Counter extends React.Component {
    static contextType = Context;
    constructor() {
        super();
        this.state = { time: {}, seconds: 1200, showing: false};
        this.time = "";
        
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    
    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
        this.setState({showing: !this.showing})
        var today = new Date();
        //this.date = today;
        console.log(today.getTime())
        this.time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    }

    getEntrada() {
        const data = this.context;
        return data.state.entrada
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
        }
    }

    Pago(HE){
        var timeStart = new Date("01/01/2007 " + HE).getHours();
        var timeEnd = new Date("01/01/2007 " + this.time).getHours();
        
        var hourDiff = timeEnd - timeStart; 
        console.log(timeEnd - timeStart)
        if (hourDiff < 0) {
            hourDiff = 24.0 + hourDiff;
         }
         console.log(hourDiff)
         return hourDiff;
    }

    render() {
        const { showing } = this.state;
        var dat = this;
        var HE = dat.getEntrada();
        return (
            <div>
                <div className="box">
                 
                    <h5>Tiempo para salir:</h5>
                </div>
                <div className="box"> Min: &nbsp; <b> {this.state.time.m} </b> &nbsp; Seg: &nbsp; <b>{this.state.time.s}</b>
                </div>
                <div className="box">
                    <Button style={{  marginTop: '0.5rem' }} variant="primary" onClick={this.startTimer}> Pagar</Button>{''}
                </div>

                <div className="box" style={{marginLeft:'3rem', marginTop:'0.5rem'}}>
                <Paypal />
                </div>
                <div className="box" style={{marginLeft:'3rem', marginTop:'0', height:'0'}}>
                    { showing 
                        ? <div><b>Tiempo de Salida: </b> &nbsp; &nbsp; 
                        {this.time} &nbsp; &nbsp;
                        <b>Total a Pagar:</b> &nbsp; &nbsp;
                        {this.Pago(HE)}</div>
                        : null
                    }
                    
                </div>

            </div>
        );
    }
}

