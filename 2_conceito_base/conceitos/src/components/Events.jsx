const handleClick=(e)=>{
    console.log(e)
    console.log("Executar o evento")
}

const handleRederizer=(x)=>{

    if(x){
        return <h2>Existe um componente ativo </h2>
    }else{
       return <h2>Não Existe um componente ativo </h2>
    }
}


const Events = () => {
  return (
    <div>
        <div>
        <button onClick={()=>{
            console.log("Pegando o Evento")
        }}>Evento</button>
        </div>
        <div>
            <button onClick={handleClick}>Clique</button>
        </div>
     <div>
        {handleRederizer(true)}
        {handleRederizer(false)}
     </div>
    </div>
  )
}

export default Events