import React from 'react'

export const ListaProdutos = ({listaProdutos}) => {
  return (
    <>
    <ul>
        {listaProdutos.map((produto)=>(
            <li key={produto.id}><strong>Produto:</strong>{produto.title} <strong>R$</strong> {produto.price}</li>
        ))}
    </ul>
    </>
  )
}
