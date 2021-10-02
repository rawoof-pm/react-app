import React from "react";

function PropWithFnComponent(prop) {
    console.log(prop);
    return (
        <div>
            <h1>Hello { prop.name } </h1>
        </div>
    )
}
export default PropWithFnComponent