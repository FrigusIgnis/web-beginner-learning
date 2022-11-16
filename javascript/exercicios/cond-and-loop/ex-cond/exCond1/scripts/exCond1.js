function loading() {
    let bodySel = document.body;
    let paragHora = document.querySelector('div#textHora');
    let imageHora = document.querySelector('div#imgHora');
    let dataAtual = new Date();
    let horaAtual = dataAtual.getHours();
    paragHora.innerHTML = `<p>Agora são ${horaAtual} horas...</p>`;

    if (horaAtual > 4 && horaAtual < 12) {
        imageHora.style.background = "url('imagens/manha.jpg')";
        imageHora.style.backgroundPosition = "center center";
        bodySel.style.backgroundColor = "#495b74";
        document.querySelector('main#principal').style.backgroundColor = "#cadcf1";

    } else if (horaAtual > 12 && horaAtual < 18) {
        imageHora.style.background = "url('imagens/noite.jpg')";
        imageHora.style.backgroundPosition = "top center";
        bodySel.style.backgroundColor = "#3a4047";
        document.querySelector('main#principal').style.backgroundColor = "#fdefde";

    } else {
        imageHora.style.background = "url('imagens/noite.jpg')";
        imageHora.style.backgroundPosition = "top center";
        bodySel.style.backgroundColor = "#3a4047";
        imageHora.style.background = "url('imagens/tarde.jpg')";
        imageHora.style.backgroundPosition = "bottom center";
        bodySel.style.backgroundColor = "#495b74";
        document.querySelector('main#principal').style.backgroundColor = "#fdefde";
    }
}