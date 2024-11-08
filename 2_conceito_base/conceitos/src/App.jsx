import { useState } from 'react'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import './App.css'
import MyComponents from './components/MyComponents'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)
  return (
    // A div é a minha expressão JSX
    <div className='App'>
      <h1>Fundamentos </h1>
      <FirstComponent/>
      <hr/>
      <h2>Template expression</h2>
      <TemplateExpression/>
      <MyComponents/>
      <Events/>
    </div>
  )
}

export default App
