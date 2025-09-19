var inSaque = document.getElementById("inSaque");
var btnExibir = document.getElementById("btnExibir");
var outResp1 = document.getElementById("outResp1");
var outResp2 = document.getElementById("outResp2");
var outResp3 = document.getElementById("outResp3");

btnExibir.addEventListener("click", (e) => {
    e.preventDefault();

    outResp1.innerText = "";
    outResp2.innerText = "";
    outResp3.innerText = "";

    var valorSaque = Number(inSaque.value);

    if (valorSaque == "" || isNaN(valorSaque)) {
        alert("Input inválido ! Tente novamente.");
        inNumero.focus();
        return
    }

    if (valorSaque % 10 != 0) {
        alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)");
        inSaque.focus();
        return;
    }

    var saldo = valorSaque;
    console.log(saldo);
    var notas100 = Math.floor(saldo / 100);
    saldo = saldo - (notas100 * 100);
    console.log(saldo);
    var notas50 = Math.floor(saldo / 50);
    saldo = saldo - (notas50 * 50);
    console.log(saldo);
    var notas10 = Math.floor(saldo / 10);
    console.log(saldo);

    console.log(notas100);
    console.log(notas50);
    console.log(notas10);

    if (notas100 > 0) {
        outResp1.innerText = "Notas de R$ 100: " + notas100;
    }

    if (notas50 > 0) {
        outResp2.innerText = "Notas de R$ 50: " + notas50;
    }

    if (notas10 > 0) {
        outResp3.innerText = "Notas de R$ 10: " + notas10;
    }

})