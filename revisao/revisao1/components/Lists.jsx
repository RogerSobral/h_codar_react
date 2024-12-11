import React from 'react'
import { useState } from 'react'

const Lists = () => {
    const [lista]=useState( ["pedro","carlos","maria"])
  return (
    <div>
        <ul>
            {lista.map((valor,k)=>(

             <li key={k}>{valor}</li>
            ))}
        </ul>

    </div>
  )
}

export default Lists
