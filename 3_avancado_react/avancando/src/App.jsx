

import './App.css'
import Data from '../components/Data'
// imagem em assets
import noite from "./assets/night.jpg"
import Listrender from '../components/Listrender'
import ShowUserNames from '../components/ShowUserNames'

// Desestruturando props
import CardDetails from '../components/CardDetails'

import Flagments from '../components/Flagments'


import Container from '../components/Container'

import ExecuteFunction from '../components/ExecuteFunction'
import { useState } from 'react'

import Message from '../components/Message'
import ChangeMessage from '../components/ChangeMessage'
// Usando renderização e listas, aproveitamento de componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

function botao(){

  console.log("cliquei no botão")

}



function App() {

  const [message,setMenssage]=useState("")

  function handleMessage(msg){
  setMenssage(msg)
}


  return (
   <div className='App'>
      <h1>Avançando em React</h1>
      <img src="/img.jpg" alt="Imagem de uma rua" />
      <img src={noite} alt="Imagem do céu de noite" />
      <Data/>
      <div>
        <Listrender/>
      </div>
      <div>
        <ShowUserNames name="Rogério"/>
      </div>
      {/* Desestruturando props */}
      <CardDetails color="azul" km="45" brand="fiat"/>

      {/* Reaproveitamento de componentes */}
      <CardDetails color="rosa" km={123}brand="Ford"/>
      <CardDetails color="preto" km={53}brand="Ford"/>
      <h2>Reaproveitament de código com renderização </h2>
   
   <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <CardDetails  color={car.color} brand={car.brand} km={car.km} />
            </li>
        ))}
    </ul> 

    <Flagments/>

    <Container>
      <h1>Dentro do Container</h1>
    <ul>
      <li>elemento 1</li>
      <li>elemento 2</li>
      <li>elemento 3</li>
    </ul>
    </Container>

    <ExecuteFunction myFunction={botao} />


<Message msg={message}/>
<ChangeMessage myFunction={handleMessage}/>
   </div>

   
  )
}
export default App
