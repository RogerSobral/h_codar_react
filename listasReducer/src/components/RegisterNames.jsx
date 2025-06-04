import React, { useEffect } from 'react'
import { ACTIONS } from '../App'

export const RegisterNames = ({text_field,dispatch}) => {

  function handleRegister(){
    dispatch({type:ACTIONS.LISTNAMES,payload:{name:text_field}})
    dispatch({type:ACTIONS.T_FIELDNAME,payload:""})
  }


  return (
    <div>
      <h1>Register names</h1>
      <div>
        <input type="text" placeholder='write your name' value={text_field}
        onChange={(e)=> dispatch({type:ACTIONS.T_FIELDNAME, payload:e.target.value})} />

        <button onClick={handleRegister} >Regiter</button>
      </div>
    </div>
  )
}
