import React, { Component } from 'react'
import Navibar from "./Navibar.js"
import Paypal from "./PaypalButton"
import Context from '../Context.js';
export default class Pago extends Component {
    static contextType = Context;
    getTicketCode() {
        const data = this.context;
        return data.state.Ticket_Code;
    }
    render() {
        var dat = this;
        return (
            <div>
                <Navibar />
                <div className="Page">
                    <div className="PageLayout">
                        <div class="row">
                            <div class="col-sm-9">
                                <div className="Content">
                                    Dont forget to put the payment amount. <p />
                                    Dont forget to put the exit time. <p />
                                    Dont forget to code success and fail functions on Paypal button.<p />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
