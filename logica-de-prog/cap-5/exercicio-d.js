var inNoticia = document.getElementById("inNoticia");
var btnAdicionar = document.getElementById("btnAdicionar");
var btnListar = document.getElementById("btnListar");
var outResp1 = document.getElementById("outResp1");
var outResp2 = document.getElementById("outResp2");

var noticias = [];

btnAdicionar.addEventListener("click", (e) => {
    e.preventDefault();
    
    var noticia = inNoticia.value;

    if ( noticia == "") {
        alert("Input em branco. Tente novamente !!");
        inNoticia.value = "";
        inNoticia.focus();
        return;
    }

    noticias.push(noticia);

    outResp1.innerText = "Notícias Cadastradas: " + noticias.length;

    inNoticia.value = "";
    inNoticia.focus();

})

btnListar.addEventListener("")