import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  async function fecthdata() {
    let res=await fetch("http://api.quotable.io/random")
    let d=await res.json()
    setData(d)
  }
  useEffect(()=>{
    setTimeout(()=>{
      fecthdata()
    },30000)
    fecthdata()
  },[])
  

  return (
    <>  
        <p>content:{data.content} </p>
        <h1>author:{data.author}</h1>
        <button onClick={fecthdata}>Get New Quote</button>

    </>
  )
}

export default App