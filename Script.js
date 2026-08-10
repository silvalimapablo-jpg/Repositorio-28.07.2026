const botao = document.getElementById("btn")
botao.addEventListener("click",botaoclicado);
let valor = 0
function botaoclicado() {
    console.log("fui clicado");
    valor++;
    let texto = document.getElementById("vl")
    texto.textContent=valor;
}

