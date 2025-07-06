import { useState } from 'react'
import './App.css'
import { ProfileCard } from './component/profileCard'

function App() {
  
  let [name,setName] = useState("umarFarooq")
  let [bio,setBio] = useState("Good Guy")
  return (
    <>
      <ProfileCard name="abu" age={20} bio="Intelligent boy"/>
      <ProfileCard name={name} age={21} bio={bio}/>
    </>
  )
}

export default App