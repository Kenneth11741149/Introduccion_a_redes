import React, { Component } from 'react'
import Navibar from "./Navibar.js"
import Paypal from "./PaypalButton"
export default class Pago extends Component {
    render() {
        return (
            <div>
                <Navibar/>
                <Paypal/>
            </div>
        )
    }
}
