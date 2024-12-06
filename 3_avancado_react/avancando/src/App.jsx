

import './App.css'
import Data from '../components/Data'
// imagem em assets
import noite from "./assets/night.jpg"
import Listrender from '../components/Listrender'
import ShowUserNames from '../components/ShowUserNames'

// Desestruturando props
import CardDetails from '../components/CardDetails'


// Usando renderização e listas, aproveitamento de componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

function App() {
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


   </div>
  )
}
export default App
