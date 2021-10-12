import React, { Component } from 'react'
import ChildClassComponent from './ChildClassComponent';
import ChildFnComponent from './ChildFnComponent';

class ParentClassComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(whichComponent) {
        alert(`Hello ${this.state.parentName} from ${whichComponent}`);
    }

    render() {
        return (
            <div>
                <ChildFnComponent greetHandler={this.greetParent} />
                <ChildClassComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}
export default ParentClassComponent