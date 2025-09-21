var inFruta = document.getElementById("inFruta");
var inNumero = document.getElementById("inNumero");
var btnRepetir = document.getElementById("btnRepetir");
var outResp = document.getElementById("outResp");

btnRepetir.addEventListener("click", (e) => {
    e.preventDefault();

    var fruta = inFruta.value;
    var numero = Number(inNumero.value);

    if (fruta == "") {
        alert("Input Fruta inválido. Tente novamente !");
        inFruta.value = "";
        inNumero.value = "";
        inFruta.focus();
        return;
    }

    if (numero == "" || isNaN(numero)) {
        alert("Input Número inválido. Tente novamente !");
        inFruta.value = "";
        inNumero.value = "";
        inFruta.focus();
        return;
    }

    var resposta = ""

    for (var i = 0; i < numero; i++) {
        if (i == numero -1) {
            resposta += fruta;
        } else {
            resposta += fruta + " * ";
        }    
    }

    outResp.innerText = resposta;

})