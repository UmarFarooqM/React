import { useState } from 'react'

import './App.css'
import { DataProvider } from './context/DataProvider'
import { DataComponent } from './components/DataComponents'


function App() {

  return (
    <>
      <h1> Hello from React</h1>
      <DataProvider>
      <DataComponent/>
      </DataProvider>
    </>
  )
}

export default App
