import './App.css'
// imagem em assets
import noite from "./assets/night.jpg"

function App() {
  return (
   <div className='App'>
      <h1>Avançando em React</h1>
      <img src="/img.jpg" alt="Imagem de uma rua" />
      <img src={noite} alt="Imagem do céu de noite" />
   </div>
  )
}
export default App
