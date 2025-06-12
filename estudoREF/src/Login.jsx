import React, { useState, useRef, useEffect } from "react";

function LoginForm() {
  const [username, setUsername] = useState(""); // Estado para o nome de usuário
  const [password, setPassword] = useState(""); // Estado para a senha
  const [error, setError] = useState(""); // Estado para mensagens de erro
  const usernameRef = useRef(null); // Ref para o campo de entrada do nome de usuário

  // Efeito para focar no campo de entrada do nome de usuário ao montar o componente
  
  useEffect(()=>{
    usernameRef.current.focus();
  },[]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (password==="123" && username==="carlos"){
        alert("entrou")
        setError("Entrou no sistema")
        return
    }
        setError("Usuario ou senha errado")
    

  }


  return (
    
   <>
   <h1>Login</h1>
   <form onSubmit={handleSubmit}>
    <input 
    ref={usernameRef}
    type="text" 
    placeholder="Login"
    onChange={(e)=> setUsername(e.target.value)}
     />
     <input 
     type="password"
     value={password}
     onChange={(e)=> setPassword(e.target.value)} />
     <button type="submit">Entrar</button>
     
   </form>
   <h2 style={{color:"red"}}>{error}</h2>
   </>
  );
}

export default LoginForm;
