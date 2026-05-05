import React, { useState } from 'react'

const ChangeName = () => {
    const[name,setName] =useState('Munendra'); 
    const changeName = () => {
     setName('Mansi')
    }
  return (
   <>
   <div>
    <h1>My Name is{name}</h1>
    <button onClick={changeName}>Click me</button>
   </div>
   </>
  )
}

export default ChangeName
