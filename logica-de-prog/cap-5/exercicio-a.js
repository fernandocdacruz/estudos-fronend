var inClube = document.getElementById("inClube");
var btnAdicionar = document.getElementById("btnAdicionar");
var btnListar = document.getElementById("btnListar");
var btnMontar = document.getElementById("btnMontar")
var outResp = document.getElementById("outResp");

var clubes = [];

btnAdicionar.addEventListener("click", (e) => {
    
    e.preventDefault();

    var clube = inClube.value;

    if (clube == "") {
        alert("Input em branco. Tente novamente.");
        inClube.value = "";
        inClube.focus();
        return;
    } 

    clubes.push(clube);
    inClube.value = "";
    inClube.focus();

})

btnListar.addEventListener("click", () => {

    if (clubes.length == 0) {
        alert("Lista de clubes vazia. Adicione algum.");
        inClube.value = "";
        inClube.focus();
        return;
    }

    var listaClubes = "";

    for (var i = 0; i < clubes.length; i++) {
        listaClubes += (i+1) + ". " + clubes[i] + "\n";
    }

    outResp.innerText = listaClubes;

})

btnMontar.addEventListener("click", () => {
   
    if (clubes.length == 0) {
        alert("Lista de clubes vazia. Adicione algum.");
        inClube.value = "";
        inClube.focus();
        return;
    }

    if (clubes.length % 2 != 0) {
        alert("Lista com quantidade de clubes em valor impar. Adicione mais um clube.");
        inClube.value = "";
        inClube.focus();
        return;
    }

    var listaJogos = "";


    for (var i = 0; i < (clubes.length / 2); i++) {
        listaJogos += clubes[i] + " X " + clubes[clubes.length - (1+i)] + "\n";
    }

    outResp.innerText = listaJogos

})