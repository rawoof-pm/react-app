import React, { Component } from 'react'

//Third approach with bind event inside constructor
class BindEventThirdApproachClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: "Hello",
            isTextChanged: false
        }
        //Third approach with bind event inside constructor
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState(function (prevstate) {
            return {
                message: !prevstate.isTextChanged ? "Goodbye!" : "Hello",
                isTextChanged: !prevstate.isTextChanged
            }
        })
    }

    render() {
        return (
            <div>
                <span>Event Bind - Third approach - {this.state.message}</span>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default BindEventThirdApproachClassComponent