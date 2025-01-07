import { useState } from 'react'

import './App.css'
// 2 CSS de Componentes
import MyComponents from './components/MyComponents'
import Title from './components/Title';



function App() {
 
  const x=8;
  const redtitle=true;

  return (
    <>
      {/* 1- CSS Global */}
      {/* Sempre que você for aplicar style para varios componentes faça no index.css */}
       
       <h1>CSS no react</h1>

        {/* 2 CSS de Componentes */}
      <MyComponents/>

      {/* 3-  InLine style */}

      <p style={{color:"blue", padding:"25px", borderTop:"1px dotted blue"}}>Este elemento tem stilo em line</p>
      {/* 4 - Inline style dinamico */}

      <h2 style={x>10 ?{color:"black"}:{color:"yellow"}}>Essa  linha é sytle dinamico</h2>

      {/* 5 - classes dinamicas */}

      <h2 className={redtitle ? "red-title":"title"}>Este é titulo com classe dinâmica </h2>

      {/*  6- css modules  */}
      <Title/>

    </>
  )
}

export default App
