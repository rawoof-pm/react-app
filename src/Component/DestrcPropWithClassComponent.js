import React, { Component } from 'react'

class DestrcPropWithClassComponent extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>
                <span>Props destructured in Class Component - Hello {name}</span>
            </div>
        )
    }
}
export default DestrcPropWithClassComponent
