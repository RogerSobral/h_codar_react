import React from 'react'
const name="rogerio";

const data={
    age:32,
    job:"Programador"
}

const TemplateExpression = () => {
  return (
    <div>
        A soma é {2+2}
        <h2>Seja bem vindo {name}</h2>
        <p>Sua idade é {data.age} sua profissão é {data.job}.</p>
    </div>
    
  )
}

export default TemplateExpression