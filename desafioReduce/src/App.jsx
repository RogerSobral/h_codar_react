import { useReducer, useEffect } from 'react'
import { ListaProdutos } from './components/ListaProdutos'
import { BuscaProduto } from './components/BuscaProduto'

export  const type={
  lista:"Lista",
  busca:"Busca",
}

const estadoIncial={
  produtos:[],
  produtosOriginais: [],
  filtroAtivo:false,
  carregando:true
}


const reducer=(state,active)=>{
  switch(active.type){
    case type.lista:

    return {
      ...state,
      produtos: active.payload,
      produtosOriginais: state.produtosOriginais.length > 0 
        ? state.produtosOriginais // já foi carregado
        : active.payload,         // primeira carga
      carregando: false
    };
      
    case type.busca:
      return {
        ...state,
        filtroAtivo: !state.filtroAtivo
      }
     
    default:
      console.log("tipo buscado no reducer não existe") 
      return state;
  }

}


function App() {

  

  const [state,dispatch ]=useReducer(reducer,estadoIncial)

  async function loadListProduct(){
    fetch("https://fakestoreapi.com/products")
    .then((response)=> response.json())
    .then((dados)=>{dispatch({type:type.lista,payload:dados})})
    .catch((erro)=> console.log("Erro "+erro));
  }

  useEffect(()=>{
    loadListProduct()
  },[])

  return (
    <>
    <BuscaProduto loadDade={state} actions={dispatch}/>
     <ListaProdutos listaProdutos={state.produtos}/>
    </>
  )
}

export default App
