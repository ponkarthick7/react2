import React, { useReducer } from 'react'
import { counterReducer } from './CounterReducer';

const initialState = {count:0};

 function CounterWithReducer() {
    const [state , dispatch]=useReducer(counterReducer, initialState);
  return (
    <div>
        <h2>CounterWithReducer</h2>
        Count:{state.count}
        <button onClick={()=> dispatch({ type:'increment'})}>+1</button>
        <button onClick={()=> dispatch({ type:'decrement'})}>-2</button>
        <button onClick={()=> dispatch({ type:'incrementBy2'})}>+2</button>
    </div>
  )
}

export default CounterWithReducer