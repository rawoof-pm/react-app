import React, { Component } from 'react'

class ChildClassComponent extends Component {

    render() {
        let { greetHandler } = this.props;
        return (
            <div>
                <button onClick={() => {
                    greetHandler('Child Class Component');
                }}>Greet Parent from Child Class Component</button>
            </div>
        )
    }
}
export default ChildClassComponent