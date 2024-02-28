import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MagicRoom from './MagicRoom';
import ShoppingCart from './shopping';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <MagicRoom/> */}
      <ShoppingCart />
      </div>
        
  )
}

export default App
