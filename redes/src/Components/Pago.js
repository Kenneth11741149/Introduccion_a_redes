import React, { Component } from 'react'
import Navibar from "./Navibar.js"
import Paypal from "./PaypalButton"
export default class Pago extends Component {
    render() {
        return (
            <div>
                <Navibar/>
                Dont forget to put the payment amount. <p/>
                Dont forget to put the exit time. <p/>
                Dont forget to code success and fail functions on Paypal button.<p/>
                <Paypal/>
            </div>
        )
    }
}
