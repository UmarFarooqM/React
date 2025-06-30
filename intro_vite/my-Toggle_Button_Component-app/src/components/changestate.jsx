import React from "react";


function ChangeState({setState,setFlag,flag}){
    
    function handleChange(){
        if(flag==true){
            setState("OFF")
            setFlag(false)
        }
        else {
            setState("ON")
            setFlag(true)
        }
    }
    return (
        <button onClick={handleChange}>Change State</button>
    )
}
export default ChangeState