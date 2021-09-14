import React, { Component } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (
            
            <Navbar bg="dark" variant="dark" expand="lg">
                 <div className="Nav">
                    <Navbar.Brand as={Link} to="/">Sistema de Parqueo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {/* <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  as={Link} to="/Precios">Precios</Nav.Link>
                            <Nav.Link href="#link">Pago</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> */}
                </div>
            </Navbar>
        )
    }
}
