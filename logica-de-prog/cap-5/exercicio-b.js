var inNumero = document.getElementById("inNumero");
var btnAdicionar = document.getElementById("btnAdicionar");
var btnVerificar = document.getElementById("btnVerificar");
var outResp1 = document.getElementById("outResp1");
var outResp2 = document.getElementById("outResp2");

var numeros = [];

btnAdicionar.addEventListener("click", (e) => {
    e.preventDefault();

    var numero = Number(inNumero.value);

    if (numero == "" || isNaN(numero)) {
        alert("Input inválido. Tente novamente.");
        inNumero.value = "";
        inNumero.focus();
        return
    }

    if (numeroRepetido(numero)) {
        alert("Não é permitido números repitidos. Tente novamente.");
        inNumero.value = "";
        inNumero.focus();
        return
    }

    numeros.push(numero);

    var resposta = "";

    for (var i = 0; i < numeros.length; i++) {
        if ( i == 0) {
            resposta += "Números: " + numeros[i];
        } else {
            resposta += ", " + numeros[i];
        }
    }

    outResp1.innerText = resposta;

    inNumero.value = "";
    inNumero.focus();

})

btnVerificar.addEventListener("click", () => {

    var resposta = "";
    var ordemCrescente = true;

    for (var i = 0; i < (numeros.length - 1); i++) {
        if (numeros[i] > numeros[(i+1)]) {
            ordemCrescente = false;
            break;
        }
    }

    if (ordemCrescente) {
        resposta = "Números estão em ordem crescente."
    } else {
        resposta = "Atenção... Números não estão em ordem crescente."
    }

    

    outResp2.innerText = resposta;

})



function numeroRepetido(numero) {
    var repetido = false;
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] == numero) {
            repetido = true;
            break;
        }
    }
    return repetido;
}