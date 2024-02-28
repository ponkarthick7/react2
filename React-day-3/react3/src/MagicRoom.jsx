import React from 'react'

function MagicRoom() {
    const [toy,settoy] = useState ('car');

    useEffect(()=>{

console.log ('welcome to magic room!');

return()=>{

    console.log('Goodbye from the magic room');
}
    }, []);
    useEffect(()=>{

        console.log (`The toy is now a ${toy}.`);
    }, [toy]);
        
  return (
    <div>
        <h1>Welcome to MagicRoom</h1>
        <button onClick={()=> setToy('doll')}>Change toy to doll</button>
        <button onClick={()=> setToy('trainl')}>Change toy to train</button>
        <p>Current toy is a{toy}</p>
    </div>
  )
}

export default MagicRoom