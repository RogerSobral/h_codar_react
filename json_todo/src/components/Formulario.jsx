import { useState } from "react";


export default function Formulario({onAdicionaTarefa}){
    
    
    function handleSubmit(e){
        e.preventDefault();
        if(tarefa && data){
            onAdicionaTarefa({key_tarefa:tarefa,key_data:data}) // envia pro App
            setData("")
            setTarefa("")
        }
    }

    const[tarefa,setTarefa]=useState("");
    const[data,setData]=useState("");
    return <>
    <h1></h1>
    <form className="nav_main_textField" onSubmit={handleSubmit}>
        <input type="text" 
        value={tarefa}
        onChange={(e)=> setTarefa(e.target.value)}  placeholder="tarefa"/>
        <input type="date"
        value={data} onChange={(e)=>setData(e.target.value)} />
        <input type="submit" value="Adicionar" />
    </form>
    </>
}