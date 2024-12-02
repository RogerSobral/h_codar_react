import React, {useRef} from "react";


const ControlerUsers=()=>{
    const lista=["pedro", "maria", "joão"]
    const inputRef=useRef();


    function addUsuario(){
       
        const valor=inputRef.current.value;
        setListas.push(valor)
       
    }
    
    return(
        <div>
            <input type="text" id="entrada" ref={inputRef} />
            <button onClick={addUsuario} >cadastrar</button>
            <ul>
                {lista.map((valor,i)=>(
                    <li key={i}>{valor}</li>
                ))}
            </ul>

        </div>

    )

}


export default ControlerUsers
