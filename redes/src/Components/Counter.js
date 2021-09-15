import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button, Table, Form, Row, Col, } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import Paypal from "./PaypalButton"
import Context from '../Context.js';

const useMountEffect = (fun) => React.useEffect(fun, []);
export default class Counter extends React.Component {
    static contextType = Context;
    constructor() {
        super();
        this.state = { time: {}, seconds: 1200, showing: false };
        this.time = "";
        this.pago = '';
        this.today = "";
        this.timeDeEntrada = "";
        
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
        this.today = new Date();
        this.timeDeEntrada = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
        this.Pago2();
        
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
        this.setState({ showing: !this.showing })
        var today = new Date();
        //this.date = today;
        console.log(today.getTime())
        this.today = new Date();
        this.timeDeEntrada = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
        this.Pago2();
    }

    getEntrada() {
        const data = this.context;
        return data.state.entrada
    }
    setCantidaPaypal(code) {
        const data = this.context;
        data.setCantidaPaypal(code);
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

    
    inicializar(){
        this.today = new Date();
        this.timeDeEntrada = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
        this.Pago2();
    }


    Pago2() {
        console.log("-------------------------------------------")
        const data = this.context;
        var HE = data.state.entrada
        console.log(HE)
        console.log(this.timeDeEntrada)
        var timeStart = new Date("01/01/2007 " + HE)
        //var timeStart = HE
        var timeEnd = new Date("01/01/2007 " + this.timeDeEntrada)

        var diffInMilliseconds = Math.abs(timeStart - timeEnd);
        console.log(diffInMilliseconds); //86400000
        var minutes = Math.floor(diffInMilliseconds / 60000)
        //var minutes = Math.floor(diffInMilliseconds / 60) % 60;
        //diffInMilliseconds -= minutes * 60;
        console.log("Minutos: ", minutes);


        var hourDiff = minutes;  //timeEnd - timeStart; 
        console.log(hourDiff >= 240)
        var pago = ''
        var pagoentero = 1;
        if (hourDiff < 15) {
            pago = 'Gratis';
        } else if (hourDiff >= 15 && hourDiff < 120) {
            pago = 'Lps. 25.00';
            pagoentero = 25;

        } else if (hourDiff >= 120 && hourDiff < 240) {
            pago = 'Lps. 35.00';
            pagoentero = 35;

        } else if (hourDiff >= 240) {
            pago = 'Lps. 45.00';
            pagoentero = 45;
        } else {
            pago = 'Lps. XX.00';
            pagoentero = 2;
        }

        console.log(hourDiff)
        console.log(pago)
        this.pago = pago
        this.setCantidaPaypal(pagoentero);
        return pago;


    }

    /*componentDidMount() {
        this.today = new Date();
        this.timeDeEntrada = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
      }*/

    render() {
        const { showing } = this.state;
        var dat = this;
        var HE = dat.getEntrada();
        
        return (
            <div className="row">


                <div className="col-sm-6">
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formTiempoSalida">
                            <Form.Label column sm="6">
                                <b> Tiempo de Entrada: </b>
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext readOnly defaultValue={HE} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formTiempoEntrada">
                            <Form.Label column sm="6">
                                <div >
                                    {/* {showing
                                        ? <div><b>Tiempo de Salida: </b> &nbsp; &nbsp;
                                            &nbsp; &nbsp;
                                        </div>
                                        : null
                                    }
*/ }

                                    <div><b>Tiempo de Salida: </b> &nbsp; &nbsp;
                                        &nbsp; &nbsp;
                                    </div>


                                </div>
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext readOnly defaultValue={this.timeDeEntrada} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formTiempoEntrada">
                            <Form.Label column sm="6">
                                <div >
                                    <div>
                                        <b>Total a Pagar:</b> &nbsp; &nbsp;
                                    </div>


                                </div>
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control plaintext readOnly value={this.pago} />
                            </Col>
                        </Form.Group>


                    </Form>

                    {/* <Button variant="primary" onClick={ContinueButton}>Continuar</Button>{''}  */}
                    <div style={{ marginTop: '1rem' }}>

                    </div>
                </div>
                
                <div className="col-sm-5">
                    <div className="box">

                        <h5>Tiempo para salir:</h5>
                    </div>
                    <div className="box"> Min: &nbsp; <b> {this.state.time.m} </b> &nbsp; Seg: &nbsp; <b>{this.state.time.s}</b>
                    </div>
                    <div className="box">
                        <Button style={{ marginTop: '0.5rem' }} variant="primary" onClick={this.startTimer}> Pagar</Button>{''}
                    </div>

                    <div className="box" style={{ marginLeft: '3rem', marginTop: '0.5rem' }}>
                        <Paypal />
                    </div>
                </div>


            </div>
        );
    }
}

