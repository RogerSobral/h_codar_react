import { useEffect, useState } from 'react'
import { type } from '../App'

export const BuscaProduto = ({ loadDade, actions }) => {
  const [t_field, setTField] = useState("")

  // Executa busca a cada mudança do campo
  useEffect(() => {
    if (t_field.trim() === "") {
      // Campo vazio → volta à lista original
      actions({ type: type.lista, payload: loadDade.produtosOriginais })
    } else {
      // Campo preenchido → filtra produtos
      const filtrados = loadDade.produtosOriginais.filter(produto =>
        produto.title.toUpperCase().includes(t_field.toUpperCase())
      )
      actions({ type: type.lista, payload: filtrados })
    }
  }, [t_field, loadDade.produtosOriginais]) // Importante monitorar t_field também!

  return (
    <>
      <input
        type="text"
        placeholder="Buscar"
        value={t_field}
        onChange={(e) => setTField(e.target.value)}
      />
    </>
  )
}
