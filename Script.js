const botao = document.querySelector("button");
botao.addEventListener("click",botaoclicado);
let valor = 0
function botaoclicado() {
    console.log("fui clicado");
    valor++;
    let texto = botao.querySelector("span");
    texto.textContent=valor;
}
