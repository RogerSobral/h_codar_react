import { useState,useEffect } from "react"



export const ListaUsuarios = ({listaUsuarios}) => {

  
    const [busca,setBusca]=useState("")

    function handleSearch(e){
        setBusca(e.target.value)

    }
    const listaFiltrada = listaUsuarios.filter((valor) =>
        valor.name.toLowerCase().includes(busca.toLowerCase())
      );

  return (
    <>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <h1>Busca de usuarios</h1>
        <input type="text" value={busca} placeholder='Pesquisar' onChange={handleSearch} style={{ marginBottom: '1rem', padding: '0.5rem' }} />
    </div>
    <ul>
    {listaFiltrada.map((element, index) => {
  return <li key={index}>{element.name}</li>;
})}
    </ul>
    </>
  )
}
