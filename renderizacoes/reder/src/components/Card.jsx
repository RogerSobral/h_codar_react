function Card({nome,children , lista}){
    return <>
         <h1>{nome}</h1>
         <ul>
            {lista.map((valor, index)=>(
              <li key={index}>{valor}</li>
            ))}
         </ul>

         {children }
    </>
}

export default Card