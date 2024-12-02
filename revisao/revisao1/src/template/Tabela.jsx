import { useState } from 'react'

const Tabela= ()=>{
    const [list]=useState(["Pedro", "Maria", "João", "José"]);

    return(
        <>
    
        <ul>
            {list.map((valor,i)=>(
            <li key={i}>{valor}</li>
            ))}

        </ul>
        

        <ul>
                
                {list.map((item,i)=>(
                <li key={i}>{item}</li>
                ))}

            </ul>
        </>

    )


}


export default Tabela