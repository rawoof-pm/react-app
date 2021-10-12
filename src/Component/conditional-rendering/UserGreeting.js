import React, { Component } from 'react'
class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            buttonText: 'Login'
        }
        this.doLoginAndLogout = this.doLoginAndLogout.bind(this)
    }

    doLoginAndLogout() {
        this.setState(function (prevState) {
            return {
                isLoggedIn: !prevState.isLoggedIn ? true : false,
                buttonText: prevState.buttonText == 'Login' ? 'Logout' : 'Login'
            }
        })
    }

    render() {
        let showDiv;
        if (this.state.isLoggedIn) {
            showDiv = <div>Welcome Rawoof</div>
        } else {
            showDiv = <div>Welcome Guest</div>
        }
        return (
            <div>
                {showDiv}
                <button onClick={this.doLoginAndLogout}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default UserGreeting
