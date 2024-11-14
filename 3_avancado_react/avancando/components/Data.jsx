import { useState } from "react";
const Data=()=>{
    const [valor,setValor]=useState("primeiro valor");
   

return (
    <div>
        <h1>{valor}</h1>
        <button onClick={()=>{setValor("modifiquei")}}>modificar</button>
    </div>
)
};

export default Data