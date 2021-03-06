import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Context from '../Context.js';
import functions from './function.js';

export default class MyApp extends React.Component {
    static contextType = Context;
    constructor(props) {
        super(props);
        this.amount = 69;
        this.today = new Date();
        this.timeDeEntrada = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
    }
    getPaypalAmount() {
        const data = this.context;
        var cobro = data.state.paypal;
        this.amount = cobro;
    }
    getId_code() {
        const data = this.context;
        return data.state.id_code;
    }
    componentDidMount(){
        this.getPaypalAmount();
    }
    
    render() {
        var dat = this;
        dat.getPaypalAmount() 
        const onSuccess = (payment) => {
            functions.updateTicket(this.getId_code(), 'YA PAGO', this.timeDeEntrada).then(function (result) {
                console.log(result)
                console.log("LLAMANDO UPDATE")
            })
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: 'Aag3Dxbg9ube5ULohkaUmgNvxSJF2TAGI6_DhDM0pRgy9rXOjmpyWKRJQ4VvTW1DCUBAdpJaIUP58yvb', //process.env.REACT_APP_APP_ID
            production: 'YOUR-SANDBOX-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!    
            return (
                
                <PaypalExpressBtn env={env}
                    client={client}
                    currency={currency}
                    total={this.amount}
                    onError={onError}
                    onSuccess={onSuccess}
                    onCancel={onCancel} />
            );
            //}
    }
}