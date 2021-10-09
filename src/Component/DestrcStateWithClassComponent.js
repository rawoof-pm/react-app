import React, { Component } from 'react'

class DestrcStateWithClassComponent extends Component {

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
        const { messsage, buttonText, isLoggedIn } = this.state;
        let loginOrLogoutBtn;
        if (isLoggedIn) {
            loginOrLogoutBtn = <button onClick={this.doLogout}>{buttonText}</button>;
        } else {
            loginOrLogoutBtn = <button onClick={this.doLogin}>{buttonText}</button>;
        }
        return (
            <div>
                <span>State Destructured in Class Component - Welcome {messsage} </span>
                {loginOrLogoutBtn}
            </div>
        )
    }

}

export default DestrcStateWithClassComponent