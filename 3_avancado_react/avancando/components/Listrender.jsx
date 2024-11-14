import { useState } from "react"

const Listrender=()=>{
    const [list]=useState(["Pedro", "Maria", "João", "José"]);
    const [users,setUsers]=useState([
        {id:1, nome:"João",age:22},
        {id:2, nome:"Maria",age:22},
        {id:3, nome:"Pedro",age:22},
    ]);

    const deleteRandom = ()=>{

        // Math.floor()  função do objeto Math em JavaScript que arredonda um número para o menor inteiro mais próximo
        const randomNumber=Math.floor(Math.random()*4);

        setUsers((prevUsers)=>
            prevUsers.filter((user)=> randomNumber !==user.id)
        );
    }


    return(
        <div>
            {/*Listas de pessoas*/ }
            <ul>
                {list.map((item,i)=>(
                <li key={i}>{item}</li>
            ))}
            </ul>

            {/*Listas de usuarios usando key*/ }
           <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.nome} - {user.age}</li>
            ))}
           </ul>

<button onClick={deleteRandom}>deletar</button>

        </div>

    )
}

export default Listrender;