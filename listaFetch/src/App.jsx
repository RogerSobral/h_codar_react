import {useState,useEffect} from 'react'
import './App.css'
import ListaProdutos from './components/ListaProdutos';


function App() {
  const [lista,setLista]=useState([])
  const [carregarLista,setCarregarLista]=useState(true)
  
  function handleList(){

    setCarregarLista(true)

    fetch("https://fakestoreapi.com/products?limit=100")
    .then((response)=>{
      if(! response.ok) throw new Error("Erro HTTP",response.status);
      return response.json();
    })
    .then((dados)=>{
      setTimeout(()=>{
        setLista(dados)
        setCarregarLista(false)
      },3000)
      
  })
    .catch((erro)=>{
      console.log("erro: ",erro)
    });

  }

  useEffect(()=>{
    handleList();
  },[])

  
  return (
    <>
    {carregarLista?<h1>Carregando...</h1>:<ListaProdutos listasCarregar={lista}/> 
    }
      
    </>
  )
}

export default App
