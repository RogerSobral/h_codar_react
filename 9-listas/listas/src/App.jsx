import { useState } from 'react';
import Formulario from './components/Formulario';
function App() {
  const [lista, setLista] = useState([]);
  function addListaTarefas(tarefa) {
    setLista((prev_tarefa) => [...prev_tarefa, tarefa]);
  }
  return (
    <>
      <Formulario onAdicionaTarefa={addListaTarefas} />
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item.key_tarefa} | {item.key_data}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
