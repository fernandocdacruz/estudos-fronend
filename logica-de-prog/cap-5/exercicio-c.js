var inCandidato = document.getElementById("inCandidato");
var inAcertos = document.getElementById("inAcertos");
var btnAdicionar = document.getElementById("btnAdicionar");
var btnListar = document.getElementById("btnListar");
var btnAprovados = document.getElementById("btnAprovados");
var outResp = document.getElementById("outResp");

var candidatos = [];

btnAdicionar.addEventListener("click", (e) => {
    e.preventDefault();

    var candidato = inCandidato.value;
    var acertos = Number(inAcertos.value);

    if (candidato == "") {
        alert("O nome do candidato não pode ficar em branco! Tente novamente");
        inCandidato.value = "";
        inCandidato.focus();
        return;
    }

    if (acertos == "" || isNaN(acertos)) {
        alert("Input válido no número de acertos! Tente novamente");
        inAcertos.value = "";
        inAcertos.focus();
        return;
    }

    if (acertos < 0 || acertos > 50) {
        alert("O minimo de acertos é 0 e o máximo 50! Tente novamente");
        inAcertos.value = "";
        inAcertos.focus();
        return;
    }

    candidatos.push({nome: candidato, acertos: acertos});

    inCandidato.value = "";
    inAcertos.value = "";
    inCandidato.focus();

    listarCandidatos();

})

btnListar.addEventListener("click", listarCandidatos);

btnAprovados.addEventListener("click", () => {
    
    var acertosAprovacao = Number(prompt("Digite o números de acertos para aprovação:"));
    
    if (acertosAprovacao == "" || isNaN(acertosAprovacao) || acertosAprovacao < 0 || acertosAprovacao > 50) {
        alert("Input inválido. Tente novamente.");
        inCandidato.value = "";
        inCandidato.focus();
        return;
    }

    var resposta = "";

    var candidatosDescrescente = [...candidatos].sort((a,b) => b.acertos - a.acertos);

    for (var i = 0; i < candidatosDescrescente.length; i++) {
        if (candidatosDescrescente[i].acertos > acertosAprovacao) {
            resposta += candidatosDescrescente[i].nome + " - " + candidatosDescrescente[i].acertos + " acertos\n";
        }
    }

    outResp.innerText = resposta;

})

function listarCandidatos() {
    var resposta = "";

    for (var i = 0; i < candidatos.length; i++) {
        resposta += candidatos[i].nome + " - " + candidatos[i].acertos + " acertos\n";
    }

    outResp.innerText = resposta;
}
