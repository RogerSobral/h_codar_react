import React from "react";

const Container= ({children})=>{

    return (
        <div> <h1>Esse é um componente pai Container</h1>
        {children}
        </div>

    )
}
export default Container