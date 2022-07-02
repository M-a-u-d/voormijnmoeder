import React from "react";
import "./Button.css"

function Button ({ children, clickHandler,}) {
return (

<button
    type="button"
    onClick={clickHandler}
>
    <h2>{ children }</h2>

</button>

);
}

export default Button;

