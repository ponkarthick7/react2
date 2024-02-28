import React, { useState } from 'react'

function ClickcounterwithState() {

    const [clickCount, setClickCount]=useState(0);

    const handleClick = ()=>{
        setClickCount(clickCount+1);
    }

  return (
    <div>
        <h2>ClickcounterwithState</h2>
        <button onClick={handleClick}>click me

        </button>
        <p>Click Count:{clickCount}</p>
    </div>
  )
}

export default ClickcounterwithState