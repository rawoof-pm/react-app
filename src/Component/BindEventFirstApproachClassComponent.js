import React, { Component } from 'react'

//First approach with bind event within render method
class BindEventFirstApproachClassComponent extends Component {

    constructor() {
        super()
        this.state = {
            message: "Hello",
            isTextChanged: false
        }
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
                <span>Event Bind - First approach - {this.state.message}</span>
                <button onClick={this.clickHandler.bind(this)}>Click Me</button>
                {/* First approach with bind event within render method */}
            </div>
        )
    }
}

export default BindEventFirstApproachClassComponent
