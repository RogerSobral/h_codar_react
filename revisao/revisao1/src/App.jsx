import { useState } from 'react'
import Tabela from './template/Tabela'
import './App.css'
import ControlerUsers from './template/ControlerUsers'


function App() {

  const [count, setCount] = useState("Testando o sistema")

  function mudarValor(){
    setCount("Modificado")
  }

  return (
    <div>
    
     <h1>{count}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure iste amet doloremque unde sit, aliquam aut labore quis commodi sed omnis blanditiis excepturi dolorum quos enim voluptates impedit et beatae?</p>
      <button onClick={mudarValor}>Mudar</button>
      <hr />
      <div><Tabela/></div>
     <ControlerUsers/>
      
        
    </div>
  )
}


export default App
