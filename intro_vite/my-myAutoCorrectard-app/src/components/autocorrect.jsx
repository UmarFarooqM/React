import React from "react";

function AutoCorrect({corrections}){
    let [userInput,setInput] = React.useState("")
    let [data,setData] = React.useState("")
    function handleChange(){
        
        data = data.split(" ")
        // console.log(data)
        for(let i=0;i<data.length;i++){
            if(data[i]=="teh"){
                data[i]=" the "
            }
            if(data[i]=="recieve"){
                data[i]=" receive "
            }
            if(data[i]=="adress"){
                data[i]=" address "
            }
            if(data[i]=="wierd"){
                data[i]=" wierd "
            }
            if(data[i]=="thier"){
                data[i]=" their "
            }
            
        }
        console.log(data)
        setInput(data)
        setData("")
        
    }
    return (
        <>
            <div>
                <label >
                        Enter Text : <input type="text" name="data" id="input" value={data} onChange={(e)=>(setData(e.target.value))} />
                </label>
                <button onClick={handleChange}>Submit</button>
            </div>
            <div>
                <p>userInput : {userInput}</p>
            </div>
                
            
        </>
    )
}
export {AutoCorrect}