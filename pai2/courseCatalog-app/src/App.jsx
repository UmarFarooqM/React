import { useState } from 'react'
import './App.css'
import Data from './Data'
import BrowerRouter from "react-router-dom"



function App() {
  

  return (
    <>
    <BrowerRouter>
    <nav>
       <link to="/" >
    App
    </link>
    <link to ="/data">
    Products
    </link>

    </nav>
    <Routes>
    <h1>Data of the Products</h1>
      <Route path="/" element={<App/>}>
    <Route path="/data" element={<Data/>}></Route>
      </Route>
    </Routes>
      <Data/>

    </BrowerRouter>
    </>
  )
}

export default App
