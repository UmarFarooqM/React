import { useState } from 'react'
import './App.css'
import ChangeState from './components/changestate'


function App() {
  let [state,setState] = useState("")
  let [flag,setFlag] = useState(false)
  if(state=="ON"){
    document.getElementById("heading").style.color="Green"
  }
  else if(state=="OFF"){
    document.getElementById("heading").style.color="Red"
  }
  return (
    <>
      <h3 id="heading">A simple ON/OFF React App</h3>
     <p>Current State : {state}</p>
     <ChangeState setState={setState} setFlag={setFlag} flag={flag}/>
    </>
  )
}

export default App