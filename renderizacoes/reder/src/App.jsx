
import Card from './components/Card'
import { useState } from 'react';
// estudar sobre a renderização de compoentes baseado em uma condição
 const lista1=["carlos","maria","pedro"]
 const lista2=["segunda","terça","quarta"]


function Imagem(){
  const urlImg = "https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG"

  
  return <>
  <img style={{width:300}} src={urlImg} alt="" />
  </>
}



const App=()=>{

  const [valor,setValor]=useState(true)

  function handleChangeComponents(e){
      setValor((v)=> !v)
  }

  return <>
  <h1>Renderizando compoentes</h1>

      {valor ?  (
        <Card nome = {"nomes"} lista={lista1} >
          <Imagem/>
        </Card>
        ):(
          <Card nome={"dias"} lista={lista2}/>
          )
        }

      <button onClick={handleChangeComponents}>Trocar</button>
  </>
}

export default App