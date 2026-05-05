import React, { useState } from 'react'
const Home = () => {
  const [num , setNum] =useState(0);
  function changeNum(){
    setNum(10);
  }
  return (
    <>
    <div className='main_box'>
        <h1>{num}</h1>
        <button className='btn btn text-danger' onClick={changeNum}>click</button>
    </div>
    </>
  )
}

export default Home
