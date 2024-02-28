import React from 'react'

function toyBox() {
    const [toys,setToys] = useState(['Teddy bear', 'race car']) ;

    const addToys = (newToy)=> {
        setToys(oldToys =>[...oldToys,newToy]);

    }

  return (
    <div>
            <h2>My toybox</h2>
            <ul>

                {toys.map(toy=><li>(toy)</li>)}
            </ul>
            <button onClick ={()=>addToy('Doll')}>Add Doll</button>
        </div>
  )
}

export default toybox