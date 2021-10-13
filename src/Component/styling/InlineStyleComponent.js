import React from 'react'

const heading = {
    color: 'blue',
    fontSize: 'x-large'
}

function InlineStyleComponent() {
    return (
        <div>
            <h1 style={heading}>Inline - Stylesheet</h1>
        </div>
    )
}

export default InlineStyleComponent
