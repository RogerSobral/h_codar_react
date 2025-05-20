// Importando StrictMode e createRoot do React
const { StrictMode } = React;
const { createRoot } = ReactDOM;


// Criando a raiz da aplicação
const root = createRoot(document.querySelector("#root"));

// Renderizando o componente
root.render(
    <StrictMode>
        <Title/>
    </StrictMode>
);
