import { useState } from "react"
import "./MyForm.css"

const MyForm = ({userName,userEmail}) => {
// 3- Gerenciamento de dados
  const [name,setName]=useState(userName);
  const[email,setEmail]=useState(userEmail);
  const [bio,setBio]=useState("");
  const [role,setRole] =useState("");

  const handleName=(e)=>{
    setName(e.target.value)
  }


  {/* 8 - TextArea */}
  const handleBio=(e)=>{
    setBio(e.target.value);

  }
    // 5- Envio de form
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(`envio ${name} ${email}`);
    console.log(`Mensagem ${bio}`);
    console.log(`select ${role}`);
// Validação
// Envio

// 7- Limpando Formularios
setName("");
setEmail("");
setBio("");
setRole("")
  }

  console.log(name)
  console.log(email)
  return (
    // 1- Criação de Form
    // 5- Envio de form
   <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Nome:</label>
        <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName}
        // 6- Controlled input
        value={name}
        />
    </div>
    {/*  2- label envolvendo input */}
    <label>
        <span>E-mail</span>
        <input type="email" name="email" id="email" placeholder="Digite o seu e-mail" onChange={(e)=>setEmail(e.target.value)}
          // 6- Controlled input
          value={email} />
    </label>
    {/* 8 - TextArea */}

<label>
    <span>Bio:</span>
    <textarea name="bio" placeholder="Descrição do Usuário" 
    onChange={handleBio} value={bio}
    ></textarea>
</label>

<label >
    <span>Função no sistema</span>
    <select name="role" onChange={(e) => setRole(e.target.value)}  value={role}>
        <option value="user">usuário</option>
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
    </select>

</label>
    <input type="submit" value="Enviar" />


   </form>
  )
}

export default MyForm