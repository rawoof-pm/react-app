import React, { Component } from 'react'

class BindEventFourthApproachClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Hello",
            isTextChanged: false
        }
    }

    //Fourth approach - Class property as arrow function
    clickHandler = () => {
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
                <span>Event Bind - Fourth approach - {this.state.message}</span>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}
export default BindEventFourthApproachClassComponent