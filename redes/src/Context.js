import React, { Component } from 'react'
//Creation of Context
const Context = React.createContext();

//Creation of the Context Provider 
class AuthUserProvider extends Component {
    state = {
        Ticket_Code: "2",
        entrada: "0",
        displayName: null,
        SignUpVisible: false,
        LogInVisible: false,
        ChangeVisible: false,
        paypal: "0",
        id_code: "0"
    }
    setTicket_Code = (code) =>{
        this.setState({Ticket_Code: code});
        
    }
    setId_code = (code) =>{
        this.setState({id_code: code});
        
    }
    setEntrada = (code) =>{
        this.setState({entrada: code});
        
    }
    setCantidaPaypal = (code) =>{
        this.setState({paypal: code});
        
    }

    // Example of information stored on context.
    ToggleSignUpModal = () => {
        var SignUpVisibleStatus = this.state.SignUpVisible;
        this.setState({ SignUpVisible: !SignUpVisibleStatus });
    }
    ToggleLogInModal = () => {
        var LogInVisibleStatus = this.state.LogInVisible;
        this.setState({ LogInVisible: !LogInVisibleStatus });
    }
    ToggleChangeModal = () => {
        var ChangeVisibleStatus = this.state.ChangeVisible;
        this.setState({ ChangeVisible: !ChangeVisibleStatus });
    }
    SwitchModals = () => {
        var SignUpVisibleStatus = this.state.SignUpVisible;
        var LogInVisibleStatus = this.state.LogInVisible;
        this.setState({ SignUpVisible: !SignUpVisibleStatus, LogInVisible: !LogInVisibleStatus });
    }
    ModalsToFalse = () => {
        this.setState({ SignUpVisible: false, LogInVisible: false, ChangeVisible: false });
    }

    render() {
        return (
            <Context.Provider value={{
                state: this.state,  
                SwitchModals: this.SwitchModals, 
                ToggleSignUpModal: this.ToggleSignUpModal,
                ToggleLogInModal: this.ToggleLogInModal, 
                ToggleChangeModal: this.ToggleChangeModal,
                setTicket_Code : this.setTicket_Code,
                setCantidaPaypal: this.setCantidaPaypal,
                setEntrada : this.setEntrada,
                setId_code : this.setId_code,
                ModalsToFalse: this.ModalsToFalse
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

//Creation of the Context Consumer
const AuthUserConsumer = Context.Consumer;

export { AuthUserProvider, AuthUserConsumer };
export default Context;
