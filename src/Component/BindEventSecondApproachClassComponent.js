import React, { Component } from 'react'

//Second approach with arrow function within render method
class BindEventSecondApproachClassComponent extends Component {

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
                <span>Event Bind - Second approach - {this.state.message}</span>
                <button onClick={() => { this.clickHandler() }}>Click Me</button>
                {/* Second approach with arrow function within render method */}
            </div>
        )
    }
}

export default BindEventSecondApproachClassComponent
