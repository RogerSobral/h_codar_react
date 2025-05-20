
import Card from "./components/Card";
import Image from "./components/Image";
import imagem from "./assets/vite.svg"
function App() {
  

  return (
    <>
     <Card><Image img={imagem} texto={"logo"}/></Card>
    </>
  )
}

export default App
