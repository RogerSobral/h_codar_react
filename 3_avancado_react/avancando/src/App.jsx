

import './App.css'
import Data from '../components/Data'
// imagem em assets
import noite from "./assets/night.jpg"
import Listrender from '../components/Listrender'

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
   </div>
  )
}
export default App
