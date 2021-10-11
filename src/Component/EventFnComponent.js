import React from 'react'

function EventFnComponent() {

    function eventClickHandler(e) {
        console.log('On Click handler called');
        console.log(e);//SyntheticBaseEvent 
    }

    function eventOverHandler(e) {
        console.log('On Mouse Over handler called');
        console.log(e);//SyntheticBaseEvent 
    }

    return (
        <div>
            <div onMouseOver={eventOverHandler}>
                Hover on me
            </div>

            <button onClick={eventClickHandler}>Click Me</button>
        </div>
    )
}
export default EventFnComponent;