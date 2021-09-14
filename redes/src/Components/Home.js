import { Alert } from 'bootstrap';
import React, { Component, useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Form } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom'
import Navibar from './Navibar.js'
//import Paypal from './PaypalButton.js'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null
    };
  }
  render() {
    var dat = this;

    function ContinueButton() {
      alert("El boton continuar ha sido clickeado.")
      var codeIsValid = true;
      if (codeIsValid == true) {
        //Go to pricing Page.
        dat.setState({ redirect: '/precios' });
      } else {
        alert("Codigo Invalido.")
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
            <div class="col-sm-5">

              <div className="Content">
                <Form>
                  <Form.Group className="mb-3" controlId="formParkingCode">
                    <Form.Label><h5> Codigo de Ticket </h5></Form.Label>
                    <Form.Control type="CodigoDeTicket" placeholder="Ingrese codigo de ticket:" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" onClick={ContinueButton}>Continuar</Button>{''}
                </Form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
