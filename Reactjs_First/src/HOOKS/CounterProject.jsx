import React, { useState } from 'react'

const CounterProject = () => {
    const[count , setCount] =useState(0);
    const handlecount = () => {
      setCount(count+1);
    }    
  return (
    <>
      <div style={{fontSize: '165px', textAlign: 'center', marginTop: '20px'}}>
        {count}
      </div>
      <button style={{display: 'block',margin: 'auto',padding: '6px 12px', cursor: 'pointer'}} onClick={handlecount}>Click Me</button>

    </>
  )
}

export default CounterProject;
