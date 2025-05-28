import { useState,useEffect } from 'react'
import { ListaUsuarios } from '../components/ListaUsuarios';


function App() {

  const [lista,setLista]=useState([]);
  const [carregar,setCarregar]=useState(true);

  function handleLoadList(){

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
      if(! response.ok) throw new Error("Erro HTTP",response.status)
        return response.json()
    })
    .then((dados)=>{
      setLista(dados)
    })
    .catch((erro)=>{
      console.log("Erro: "+ erro)
    })
  }

  useEffect(()=>{
    handleLoadList()

  },[])
  

  return (
    <>
<ListaUsuarios listaUsuarios={lista}/>
     
    </>
  )
}

export default App
