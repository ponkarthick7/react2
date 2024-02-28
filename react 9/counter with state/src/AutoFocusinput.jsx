import React, { useEffect,useRef }  from 'react'

function AutoFocusinput() {

    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
        console.log('Dom reference:',inputRef.current);

    },[])
  return (
    <div>
        <h2>AutoFocusinput</h2>
        <input type="text" ref={inputRef} placeholder="Focus on me!" />
    </div>
  )
}

export default AutoFocusinput