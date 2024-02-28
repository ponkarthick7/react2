import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ProfileNameContext } from './ProfileNameContext'

function App() {
  const [count, setCount] = useState(0)

  return (
 <ProfileNameContext.Provider value ={{ProfileName,setProfileName,ProfileNameContext}}>
<div className='App'>
  <header className='App-header'>
    <h1>Componenetia's Registry</h1>
    <Villager />

  </header>

</div>

 </ProfileNameContext.Provider>
  )
}

export default App
