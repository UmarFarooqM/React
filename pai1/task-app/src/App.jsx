import { useState } from 'react'
import './App.css'
import { Routes, Route,Link } from 'react-router-dom'
import task from "./components/task";
import about from "./components/about"
import landingpage from "./landingpage";


function App() {
  
  return (
    <>
  
    <nav>
      <Link to="/components/task">task</Link>
      <br />
      <br />
      <Link to="/components/about">about</Link>
      
      <Routes>

        <Route path="/" element ={< landingpage/>} />
         <Route path="/components/about" element ={< about/>} />
          <Route path="/components/task" element ={< task/>} />        
      </Routes>
    </nav>
    
    </>
  )
}

export default App
