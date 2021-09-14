import { Alert } from 'bootstrap';
import React, { Component, useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button, Form } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom'
import Navibar from './Navibar.js'

import functions from './function.js';

//import Paypal from './PaypalButton.js'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      num : ""
    };

    
  }
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    var dat = this;
    var tickets;
    var current;
    functions.getAllTickets().then(function (result) {
      tickets = result;
    })


    function ContinueButton() {
      
      var codeIsValid = false;
      for(let i = 0; i<tickets.length;i++){
        var temp = tickets[i].num;
        if(temp == dat.state.num){
          current = tickets[i].entrada;
          codeIsValid = true;
          break;
        }
      }
      
      if (codeIsValid == true) {
        alert("Ingreso Exitoso")
        //Go to pricing Page.
        dat.setState({ redirect: '/precios'});
        
      } else {
        alert("Codigo Invalido.")
        // Throw some error, keep on page.
      }
    }

    


    if (this.state.redirect) {
      return <Redirect to={{pathname: this.state.redirect, state: {entrada: current}}} />
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
                    <Form.Control type="CodigoDeTicket" name="num" onChange={this.updateInput} value={this.state.num} placeholder="Ingrese codigo de ticket:" />
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
