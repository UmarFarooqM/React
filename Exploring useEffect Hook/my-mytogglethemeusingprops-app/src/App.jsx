import { useState , useEffect} from 'react'
import './App.css'
import { ThemeApp } from './components/toggleapp'
import { ThemedBox } from './components/box'

function App() {
 let [theme,setTheme] = useState(()=>{
  return localStorage.getItem("color") || "dafaultTheme"
 })

 let [flag,setFlag] = useState(true)
 
 useEffect(()=>(
  localStorage.setItem("color",theme)
 ),[theme])
  return (
    <>
      <ThemeApp setFlag={setFlag} setTheme={setTheme} flag={flag}/>
      <ThemedBox theme={theme} useEffect={useEffect} />
    </>
  )
}

export default App