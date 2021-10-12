import React from 'react'

function ChildFnComponent(props) {
    let { greetHandler } = props;
    return (
        <div>
            <button onClick={() => {
                greetHandler('Child Fn Component');
            }}>Greet Parent from Child Fn Component</button>
        </div>
    )
}
export default ChildFnComponent
