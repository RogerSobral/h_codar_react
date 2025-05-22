// Instalar o npm install react-router-dom
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Menu from "./Menu"

import Home from './pages/Home';
import Sobre from './pages/Sobre';

function App() {
  

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        
      </Routes>
    </BrowserRouter>

    
   
   
  )
}

export default App
