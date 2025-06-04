import React from 'react'

export const ListNames = ({state}) => {
  return (
   <>
   <ul>
      {state.map((name,index)=>(
        <li key={index}>{name.name}</li>
      ))}

   </ul>
   </>
  )
}
