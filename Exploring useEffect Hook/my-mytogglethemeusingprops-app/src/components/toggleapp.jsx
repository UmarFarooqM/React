import React from "react";

function ThemeApp({setTheme,setFlag,flag}){
    function handleTheme(){
        if(flag){
            setTheme("#333333")
            setFlag(false)
        }
        else{
            setTheme("Blue")
            setFlag(true)
        }
    }
    return (
        <>
            <button onClick={handleTheme}>Change Theme</button>
        </>
    )
}
export {ThemeApp}