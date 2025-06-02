import { useState,useReducer } from 'react'

const type={
  lista:"Lista",
  busca:"Busca"
}

const estadoIncial={
  produtos:[],
  filtroAtivo:false,
  carregando:true
}


const reducer=(state,active)=>{
  switch(active.type){
    case type.lista:
      
    case type.busca:
      state=!state;
    default:
      console.log("tipo buscado no reducer não existe") 
  }

}



function App() {

  

  const [state,dispatch ]=useReducer(reducer,estadoIncial)

  return (
    <>
     
    </>
  )
}

export default App
