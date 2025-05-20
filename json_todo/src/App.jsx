import { useState } from 'react';
import Formulario from './components/Formulario';
import tarefasIniciais  from '../dados/tarefas.json'
function App() {
  const [lista, setLista] = useState(tarefasIniciais );
  function addListaTarefas(tarefa) {
    setLista((prev_tarefa) => ({...prev_tarefa, [id]:tarefa}));
  }
  return (
    <>
      <Formulario onAdicionaTarefa={addListaTarefas} />
      <ul>
            {Object.entries(lista).map(([id, item]) => (
              <li key={id}>
                {item.key_tarefa} | {item.key_data}
              </li>
          ))}
      </ul>
    </>
  );
}
export default App;
