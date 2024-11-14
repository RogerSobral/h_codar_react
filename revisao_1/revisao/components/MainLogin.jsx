import {userState} from "react";
import "../css/mainLogin.css"

const MainLogin=()=>{

    return (
<div className="mainLogin">
    <input type="text" placeholder="Nome" />
    <input type="text" placeholder="Senha" />
    <button className="btnLogar" >Logar</button>
</div>

    )
}

export default MainLogin
