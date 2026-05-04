import React from 'react'

const Greeting = ({isLoggedIn}) => {
    return(isLoggedIn?"welcome!" : "Login please")
    
}
const App = () => {
  return (
    <>
    <Greeting isLoggedIn={true} />
    </>
  )
}

export default App