import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/addtodo'
import Todos from './components/Todos'

function App() {
 
  return (
    <>
    <h1>learn about redux toolkit</h1>
    <Addtodo/>
    <Todos/>
    </>
  )
}

export default App
