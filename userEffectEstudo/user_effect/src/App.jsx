import {useEffect,useState} from 'react';
// function App() {

//   useEffect(()=>{
//     console.log("rodando o codigo")
//   },[])
 
//   return (
//   <>
//   <h1>Teste</h1>
  
//   </>
   
   
//   )
// }



// Exemplo 2: Executar sempre que um valor mudar
// function App() {
//   const [contador,setContador]=useState(0)

//   useEffect(()=>{
//     console.log(`valor: ${contador}`)
//   },[contador])


//   return <>
//   <input type="text" value={contador} onChange={(e)=>setContador(e.target.value)} />

//   <button onClick={()=> setContador(contador+1)}>somar</button>
  
//   </>
// }



//  Exemplo 3: Consumir uma API com fetch
// Para estudar essa etapa você precisa dominar o basico de promise
// function App() {
  
//   const [dados,setDados]=useState([]);

//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>res.json())
//     .then((res)=>setDados(res));
//   },[]);


//   return <>

//   <ul>
//     {dados.map((usuario)=>(
//       <li key={usuario.id}>{usuario.name}</li>
//     ))}
//   </ul>
  
  
//   </>
// }


//  Exemplo 4: Timer / Interval

// function Title({valor}){

//   return <>
//   <h1>Contador do title</h1>
//          <h1>{valor}</h1>
//   </>
// }

// function App() {

//   const [segundos,setSegundos]=useState(0)

//   useEffect(()=>{
//     // Definimões uma repetição de ação a cada intervalo de tempo sendo assim ele vai modificar onde o elemento esta sendo utilizado. veja o exemplo do Title o qual é um componente externo 
//     const time=setInterval((e)=>{
//         setSegundos((prev)=> prev+1)
//     },1000);


//     // cleanup
//     return ()=>clearInterval(time) // vai lipar o componente para evitar que fique execultando mesmo quando tiver trocado de tela

//   },[])
  
//   return <>

//   <h1>{segundos}</h1>
//   <Title valor={segundos}/>
//   </>
// }




function App() {
  useEffect(() => {
    console.log("useEffect foi executado!");
    // Função que será chamada no resize
    function mensagemResize() {
      console.log("Acabei de mudar o tamanho da tela");
    }

    // Adiciona o ouvinte de evento
    window.addEventListener("resize", mensagemResize);

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", mensagemResize);
    };
  }, []); // Executa uma vez ao montar

  return (
    <>
      <h1>Redimensione a janela e veja o console</h1>
    </>
  );
}

export default App;

