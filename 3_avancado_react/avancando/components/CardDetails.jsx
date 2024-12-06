import React from "react";

// Estamos desestruturando um props
const CardDetails=({brand,km, color})=>{


return (
    <>
    <h3>working with Props</h3>
    <ul>
        <li>Marca: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
    </ul>
    
    </>
)

}

export default CardDetails