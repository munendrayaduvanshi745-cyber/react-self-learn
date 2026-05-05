import React, { useState } from 'react'

const Couting = () => {
  const[num,setNum]= useState(0);
  function increase(){  setNum(num+1);}
  function decrease(){  setNum(num-1);}
  function jumpby(){  setNum(num+5);}
  return (
    <div >
      <h1>{num}</h1>
      <div className='main'>
        <button  onClick={increase}>Increase</button>
        <button  onClick={decrease}>Decrease</button>
        <button  onClick={jumpby}>jumpby5</button>
      </div>
    </div>
  )
}

export default Couting;


