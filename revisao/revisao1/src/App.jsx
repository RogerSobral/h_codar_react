import { useState } from 'react'

import './App.css'
import Container from '../components/Container'
import Title from '../components/Title'
import Lists from '../components/Lists'

function App() {

 
  return (
    <div>
      <h1>estudo</h1>
    <Container>
        <Title titulo={"Estudando React"}/>

        <Lists/>

    </Container>
     
        
    </div>
  )
}


export default App
