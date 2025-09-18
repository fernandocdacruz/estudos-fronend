var inHora = document.getElementById("inHora");
var btnExibir = document.getElementById("btnExibir");
var btnReset = document.getElementById("btnReset");
var resposta = document.getElementById("resposta");
var outResp = document.getElementById("outResp");

btnExibir.addEventListener("click", (e) => {
    e.preventDefault();

    var hora = Number(inHora.value);
    var horaNafranca = hora + 5;

    if (horaNafranca > 24) {
        outResp.innerText = "Hora na França: " + (horaNafranca - 24).toFixed(2);
    } else {
        outResp.innerText = "Hora na França: " + horaNafranca.toFixed(2);
    }

    resposta.style.display = "flex";

})

btnReset.addEventListener("click", (e) => {
    resposta.style.display = "none";
    inHora.value = "";
    inHora.focus();
})