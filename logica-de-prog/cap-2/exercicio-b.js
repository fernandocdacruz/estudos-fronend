var outResp1 = document.getElementById("outResp1");

var btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", (event) => {
    event.preventDefault()

    var valor = document.getElementById("inValor").value;
    var tempoDeUso = document.getElementById("inTempo").value;
    

    var valorTotal = Math.ceil(tempoDeUso / 15) * valor;

    outResp1.innerText = "Valor a pagar R$: " + valorTotal.toFixed(2);

})

var btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", (e) => {
    e.preventDefault();

    outResp1.innerText = ""

})