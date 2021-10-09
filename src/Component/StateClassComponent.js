import React, { Component } from 'react'

class StateClassComponent extends Component {

    constructor() {
        super() //This is mandatory because we extended Component react class so we must invoke Component class constructor first   
        this.state = {
            messsage: "Visitor",
            buttonText: "Login",
            isLoggedIn: false
        }
        this.doLogin = this.doLogin.bind(this);
        this.doLogout = this.doLogout.bind(this);
    }

    afterSetState() {
        console.log(this.state);
    }

    doLogin() {
        this.setState({
            messsage: "User",
            buttonText: "Logout",
            isLoggedIn: true
        }, this.afterSetState());
    }

    doLogout() {
        this.setState({
            messsage: "Visitor",
            buttonText: "Login",
            isLoggedIn: false
        }, this.afterSetState());
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        let loginOrLogoutBtn;
        if (isLoggedIn) {
            loginOrLogoutBtn = <button onClick={this.doLogout}>{this.state.buttonText}</button>;
        } else {
            loginOrLogoutBtn = <button onClick={this.doLogin}>{this.state.buttonText}</button>;
        }
        return (
            <div>
                <span>Class Component - Welcome {this.state.messsage} </span>
                {loginOrLogoutBtn}
            </div>
        )
    }
}

export default StateClassComponent
