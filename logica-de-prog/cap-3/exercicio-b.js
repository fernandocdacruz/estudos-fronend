var inNumero = document.getElementById("inNumero");
var btnExibir = document.getElementById("btnExibir");
var outResp = document.getElementById("outResp");

btnExibir.addEventListener("click", (e) => {
    e.preventDefault();

    var numero = Number(inNumero.value);

    if (numero == "" || isNaN(numero)) {
        alert("Input inválido. Tente novamente!!");
        inNumero.focus();
        return;
    }

    var raizQuadrada = Math.sqrt(numero);
    var quadradoPerfeito = (raizQuadrada - Math.floor(raizQuadrada)) == 0 ? true : false;

    if (quadradoPerfeito) {
        outResp.innerText = "A raiz quadrada de " + numero + " é " + raizQuadrada;
    } else {
        outResp.innerText = "Não há raiz exata para " + numero;
    }

})