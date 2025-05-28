

const ListaProdutos = ({listasCarregar}) => {


  return (
    <><h1>Lista de Produtos</h1>
    <ul>
    {listasCarregar.map((produto,index)=>(
      <li key={index}>{produto.title}</li>
    )
    )}
    </ul>
    </>
    
  )
}

export default ListaProdutos