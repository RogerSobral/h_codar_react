import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState("Testando o sistema")

  function mudarValor(){
    setCount("Modificado")
  }

  return (
    <>
    
     <h1>{count}</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure iste amet doloremque unde sit, aliquam aut labore quis commodi sed omnis blanditiis excepturi dolorum quos enim voluptates impedit et beatae?</p>
      <button onClick={mudarValor}>Mudar</button>
        
    </>
  )
}

export default App
