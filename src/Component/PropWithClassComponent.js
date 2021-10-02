import React, { Component } from "react";

class PropWithClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}
export default PropWithClassComponent