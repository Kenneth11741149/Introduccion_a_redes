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
            entrada : "01"
          };
    }
    getTicketCode() {
        const data = this.context;
        return data.state.Ticket_Code;
    }

    render() {
        
        var dat = this;
        var TC = dat.getTicketCode()
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
                        <div class="row">
                            <div class="col-sm-10">
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
                                            <tr>

                                                <td>Ticket perdido </td>
                                                <td>L. 200.00 </td>

                                            </tr>
                                        </tbody>
                                    </Table>
                                    <hr />

                                    <div class="row">
                                        <div class="col-sm-7">
                                            <Form>
                                            <Form.Group as={Row} className="mb-3" controlId="formTiempoEntrada">
                                                    <Form.Label column sm="6">
                                                        <b></b>
                                                    </Form.Label>
                                                    <Col sm="6">
                                                        <Form.Control plaintext readOnly defaultValue="" />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formTiempoEntrada">
                                                    <Form.Label column sm="6">
                                                        <b></b>
                                                    </Form.Label>
                                                    <Col sm="6">
                                                        <Form.Control plaintext readOnly defaultValue="" />
                                                    </Col>
                                                </Form.Group>
                                                <Form.Group as={Row} className="mb-3" controlId="formTiempoSalida">
                                                    <Form.Label column sm="6">
                                                        <b> Tiempo de Entrada: </b>
                                                    </Form.Label>
                                                    <Col sm="6">
                                                        <Form.Control plaintext readOnly defaultValue={this.state.entrada} />
                                                    </Col>
                                                </Form.Group>
                                                
                                            </Form>
                                            
                                            {/* <Button variant="primary" onClick={ContinueButton}>Continuar</Button>{''}  */}
                                            <div style={{ marginTop: '1rem' }}>
                                          
                                            </div>
                                        </div>
                                        <div class="col-sm-1">
                                        <hr width="1" size="165"/> 
                                           
                                        </div>
                                        <div class="col-sm-4">
                                        <br/>
                                        <br/>
                                           <Counter/>
            
                                        </div>

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

