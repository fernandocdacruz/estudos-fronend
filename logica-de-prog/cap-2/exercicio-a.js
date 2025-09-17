var btnMostrar = document.getElementById("btnMostrar");

btnMostrar.addEventListener("click", (event) => {
    
    event.preventDefault()

    var medicamento = document.getElementById("inMedicamento").value;
    var preco = document.getElementById("inPreco").value;
    var outResp1 = document.getElementById("outResp1");
    var outResp2 = document.getElementById("outResp2");

    var precoFinal = Math.floor(2 * preco);

    outResp1.innerText = "Promoção de " + medicamento;
    outResp2.innerText = "Leve 2 por apenas R$: " + precoFinal.toFixed(2);
    
})