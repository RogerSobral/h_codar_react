import { useState } from 'react'


function App() {
  const [texto,setTexto]=useState("valor antigo");
  const [valor,setValor]=useState(false);
  
  function handleButton(e){
    setTexto("novo valor");
    setValor(true);
  }

  function handleComponent(e){
    if(e){
      return <h1>Componenete verdadeiro</h1>
    }else{
      return <h1>Componenete falso</h1>
    }
  }

  return (
    <>
     <h1>{texto}</h1>
     <button onClick={handleButton}>Clicar</button>
     <div>
        {handleComponent(valor)}
     </div>
       
     
    </>
  )
}

export default App
