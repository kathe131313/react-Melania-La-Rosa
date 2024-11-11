import React from 'react';

function Greeting(props) {
    return (
        <div className = "container">

            <h2>{props.mensaje}</h2>
        </div>
    )
}
export default Greeting;