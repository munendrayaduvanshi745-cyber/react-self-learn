import React from 'react'

const Props = (props) => {
  return (
    <>
    <div className='card'>
      <img src={props.img} alt="" />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, odio?</p>
      <button>View Page</button>
      
    </div>
    </>
  )
}

export default Props
