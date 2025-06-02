import { useReducer } from 'react';


const type={
  aumentar:"Aumentar",
  diminuir:"Diminuir",
  resetar:"Resetar"
}


const reducer=((estado,action)=>{
  switch(action.type){
    case type.aumentar:
      return estado+1;
    case type.diminuir:
      return estado-1;
    case type.resetar:
      return 0
    default:
      return estado;
  }
});

function App() {

  const [estado,dispatch]=useReducer(reducer,0);
  

  return (
    <>
    <h1>Contador: {estado}</h1>
    <button onClick={()=> dispatch({type:type.aumentar})}>Add</button>
    <button onClick={()=> dispatch({type:type.diminuir})}>Subtrair</button>
    <button onClick={()=> dispatch({type:type.resetar})}>Resetar</button>
      
    </>
  )
}

export default App
