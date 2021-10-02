import React from 'react'

function WithoutJSXComponent() {
    let h1Tag = React.createElement('h1', { id: 'h1-hello', className: 'hellocss'}, 'Hello from Without JSX Component');
    return React.createElement('div', {id: 'div-hello'}, h1Tag);
}
export default WithoutJSXComponent