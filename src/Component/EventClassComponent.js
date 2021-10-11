import React, { Component } from 'react'

class EventClassComponent extends Component {

    eventClickHandler = (e) => {
        console.log('On Click handler called');
        console.log(e);//SyntheticBaseEvent 
    }

    eventOverHandler = (e) => {
        console.log('On Mouse Over handler called');
        console.log(e);//SyntheticBaseEvent 
    }

    render() {
        return (
            <div>
                <div onMouseOver={this.eventOverHandler}>
                    Hover on me
                </div>

                <button onClick={this.eventClickHandler}>Click Me</button>

            </div>
        )
    }
}

export default EventClassComponent;