import React, { Component, useState, useEffect } from 'react';
import { Container, Table, Form, Row, Col, Button } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom'
import Navibar from './Navibar.js'
import Paypal from "./PaypalButton"
import Counter from './Counter.js'
import Context from '../Context.js';

export default class Precios extends Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        console.log(props)
        //var temp = this.props.state.entrada;
        this.state = {
            redirect: null,
            
          };
    }
    getTicketCode() {
        const data = this.context;
        return data.state.Ticket_Code;
    }
    getEntrada() {
        const data = this.context;
        return data.state.entrada
    }
    
    render() {
        
        var dat = this;
        var TC = dat.getTicketCode()
        var HE = dat.getEntrada();
        function ContinueButton() {
            alert("El boton pagar ha sido clickeado.")
            var codeIsValid = true;
            if (codeIsValid == true) {
                //Go to pricing Page.
                dat.setState({ redirect: '/pago' });
            } else {
                alert("Operacion Invalida")
                // Throw some error, keep on page.
            }
        }

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div >
                <Navibar />
                Codigo de Ticket: {TC.toString()}
                <div className="Page">
                    <div className="PageLayout">
                        <div className="row">
                            <div className="col-sm-10">
                                <div className="Content">
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>

                                                <th>Tiempo</th>
                                                <th>Monto a Cancelar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td>1 min - 15 min</td>
                                                <td>Gratis</td>

                                            </tr>
                                            <tr>

                                                <td>16 min - 2 horas</td>
                                                <td>L. 25.00</td>

                                            </tr>
                                            <tr>

                                                <td>3 horas - 4 horas </td>
                                                <td>L. 35.00</td>

                                            </tr>
                                            <tr>

                                                <td>Hora adicional </td>
                                                <td>L. 40.00</td>

                                            </tr>
                                            
                                        </tbody>
                                    </Table>
                                    <hr />

                                    <div className="row">
                                       <Counter></Counter>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

