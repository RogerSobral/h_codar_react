import React from 'react'

const ChangeMessage = ({myFunction}) => {
    const message=["olá", "oi", "tudo Bem"]

  return (
    <div>
        <button onClick={()=>myFunction(message[0])}>1</button>
        <button onClick={()=>myFunction(message[1])}>2</button>
        <button onClick={()=>myFunction(message[2])}>3</button>
    </div>
  )
}

export default ChangeMessage