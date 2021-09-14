import React, { Component, useState, useEffect } from 'react';
import { Container, Table, Form, Row, Col, Button } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom'
import Navibar from './Navibar.js'



export default class Precios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: null
        };
    }

    render() {
        var dat = this;

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

                <div className="Page">
                    <div className="PageLayout">
                        <div class="row">
                            <div class="col-sm-9">
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
                                    <Form>
                                        <Form.Group as={Row} className="mb-3" controlId="formTiempoEntrada">
                                            <Form.Label column sm="2">
                                                <b>Tiempo de Entrada: </b>
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control plaintext readOnly defaultValue="Code here" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formTiempoSalida">
                                            <Form.Label column sm="2">
                                                <b> Tiempo de Salida: </b>
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control plaintext readOnly defaultValue="Also code Here" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="formTotalAPagar">
                                            <Form.Label column sm="2">
                                                <b>   Total a pagar: </b>
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control plaintext readOnly defaultValue="Dont forget to code here too." />
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                    <Button variant="primary" onClick={ContinueButton}>Continuar</Button>{''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

