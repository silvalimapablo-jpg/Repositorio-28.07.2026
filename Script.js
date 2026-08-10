
const botao = document.querySelector("button"); 
botao.addEventListener("click", botaoclicado); 

function botaoclicado() { 
    let texto = botao.querySelector("span"); 
    
    let curtidasAtuais = parseInt(texto.textContent) || 0;
    texto.textContent = curtidasAtuais + 1; 
}