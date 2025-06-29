
export { useState } from 'react'
import './App.css'
import increment from './components/increment';
import decrement from './components/decrement';
import display from './components/display';

function App() {
   const [count,setCount] = useState(0);
  return (
    <>
   
    <display count ={count}/>
    <increment  setCount={setCount}/>
    <decrement setCount={setCount} />
    </>
  )
}

export default App
