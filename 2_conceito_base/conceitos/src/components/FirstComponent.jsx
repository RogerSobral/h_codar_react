import MyComponents from "./MyComponents"

const FirstComponent=()=>{
    // Você deve ter um return
    return (
        // Expressões JSX são podem ter um elemento pai
         
        <div>
            {/*A div é a minha expressão JSX*/}
            <h1>Meu primeiro componente</h1>
            <MyComponents/>
        </div>
    )
}

export default FirstComponent