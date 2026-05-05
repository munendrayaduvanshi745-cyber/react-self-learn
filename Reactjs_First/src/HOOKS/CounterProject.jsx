import React, { useState } from 'react'

const CounterProject = () => {
    const[count , setCount] =useState(0);
    const handlecount = () => {
      setCount(count+1);
    }    
  return (
    <>
     <div className='parent' style={{display:'flex',justifyContent:'center'}}>
       <h1>{count}</h1>
       <div>
        <button  onClick={handlecount}>Click to count</button>
       </div>
     </div>

    </>
  )
}

export default CounterProject
