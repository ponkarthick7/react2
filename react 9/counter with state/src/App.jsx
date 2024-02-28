import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Clickcounterwithstate from './Clickcounterwithstate'
import AutoFocusinput from './AutoFocusinput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
     <Clickcounterwithstate />
     <AutoFocusinput />
    </div>
  )
}

export default App
