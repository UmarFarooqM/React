import React from "react";

function increment({setCount}){
   
    return (
        <>
           <button onClick={()=>{setCount(prev=> prev+1)}}> increment</button>
        </>
    )
}

export default increment