
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Component, useEffect, useContext } from 'react'
import Home from './Components/Home.js';
import Precios from './Components/Precios.js';
import Pago from './Components/Pago.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from './Context.js';


function App() {
  const data = useContext(Context);
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/precios">
            <Precios/>
          </Route>
          <Route exact path="/pago">
            <Pago/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
