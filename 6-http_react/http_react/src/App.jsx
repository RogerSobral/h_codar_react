
import { useState,useEffect } from 'react'
import './App.css'

const url="http://localhost:3000/products";

function App() {

  //1) Resgatando dados
  const [products, setProduct]=useState([]);

  // 2) enviar dados
  const [name,setName]=useState("");
  const [price, setPrice]=useState("");

  const handleSubmit =  async (e)=>{
    e.preventDefault()

    const product={
      name,price
    };

   
    const res= await fetch(url,{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(product)

    }
    );

    // 3) Carregamento dinâmico 
    const addProduct= await res.json();

// Ele vai acessar o modificador de estado, pegar o antigo estado e add o novo valor 
    setProduct((prevProduct)=>[...prevProduct,addProduct])


  }

  useEffect(()=>{
    console.log("Carregando");


    async function getData(){
      // await- espere
      // fetch - buscar
      const res= await fetch(url);

      const data= await res.json();

      setProduct(data)

    }

    getData();
  },[])

  useState
  return (
    <>
     <h1>HTTP react</h1>

     {/* 1) Resgatando dados */}
     <ul>
      {products.map((product)=>(
        <li key={product.id}>{product.name} R${product.price}</li>
      ))
      }
     </ul>

      {/* 2) enviar dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>

        <label>
          <span>Nome</span>
          <input type="text" value={name}  placeholder='Nome' onChange={(name)=>{setName(name.target.value)}} />
        </label>

        <label>
          <span>Preço</span>
          <input type="text" value={price}  placeholder='Preço' onChange={(price)=>{setPrice(price.target.value)}} />
        </label>

        <input type="submit" value="Cadastrar" />

        </form>

      </div>


    </>
  )
}

export default App
