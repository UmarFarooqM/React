import React from "react";
function ThemedBox({theme,useEffect}){
     useEffect(() => {
        document.getElementById("heading").style.color = theme;
        document.getElementById("heading").style.backgroundColor = theme;
    }, [theme]);
    return (
        <>
            <p>Current Theme : {theme}</p>

            <div id="heading">Heading from ThemedBox</div>
            
        </>
    )
}
export {ThemedBox}