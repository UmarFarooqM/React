import React from "react";

function decrement({setCount}){

    return (
        <button onClick={()=> setCount(prev => prev-1)}>decrement</button>
    )
}

export default decrement