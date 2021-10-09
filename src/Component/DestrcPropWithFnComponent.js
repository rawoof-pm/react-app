import React from 'react'

function DestrcPropWithFnComponent(props) {
    const { name } = props;
    return (
        <div>
            <span>Props destructured in Function Component - Hello {name}</span>
        </div>
    );
}
export default DestrcPropWithFnComponent