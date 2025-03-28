import { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  // Estado para os produtos
  const [products, setProducts] = useState([]);

  // Estado para o formulário
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Custom hook para buscar os dados
  const { data: items } = useFetch(url);

  // Atualiza os produtos quando os dados são carregados
  useEffect(() => {
    if (items) {
      setProducts(items);
    }
  }, [items]);

  // Função para adicionar um novo produto
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const addProduct = await res.json();

    // Atualiza a lista de produtos localmente
    setProducts((prevProducts) => [...prevProducts, addProduct]);

    // Limpa os campos do formulário
    setName("");
    setPrice("");
  };

  return (
    <>
      <h1>HTTP React</h1>

      {/* Lista de produtos */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} R${product.price}
          </li>
        ))}
      </ul>

      {/* Formulário para adicionar um produto */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              placeholder="Preço"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </>
  );
}

export default App;
