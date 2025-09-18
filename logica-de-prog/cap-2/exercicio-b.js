var outResp1 = document.getElementById("outResp1");
var btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (event) => {
    event.preventDefault()

    var valor = document.getElementById("inValor").value;
    var tempoDeUso = document.getElementById("inTempo").value;
    

    var valorTotal = Math.ceil(tempoDeUso / 15) * valor;

    outResp1.innerText = "Valor a pagar R$: " + valorTotal.toFixed(2);

    resposta.style.display = "flex"; // mostra de novo a div

})

var btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", () => {
    outResp1.innerText = "";
    resposta.style.display = "none"; // esconde a div
});