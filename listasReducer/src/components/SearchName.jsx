import React from 'react'
import { ACTIONS } from '../App'
export const SearchName = ({searchName, dispatch,list}) => {

  function handleSearch(e){
    const newWord=e.target.value
    dispatch({type:ACTIONS.SEARCHNAME,payload:newWord})
    if (newWord.trim()!==""){
      const newDatas=list.filter((nome)=> nome.name.toUpperCase().concat(newWord.name.toUpperCase()))
      dispatch({type:ACTIONS.LISTNAMES,payload:newDatas})
    }


  }

  return (
    <div>
      <input type="text" 
      value={searchName}
      onChange={handleSearch}  
      placeholder='Search to name'
      />
      </div>
  )
}
