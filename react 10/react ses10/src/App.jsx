import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CounterWithReducer from './CounterWithReducer'
import CounterWithState from './CounterWithState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
     <CounterWithReducer />
     <CounterWithState />
    
    </div>
  )
}

export default App
