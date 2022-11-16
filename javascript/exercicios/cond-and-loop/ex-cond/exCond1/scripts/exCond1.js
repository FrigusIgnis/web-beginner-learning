function loading() {
    let bodySel = document.body;
    let mainCont = document.querySelector('main#principal');
    let paragHora = document.querySelector('div#textHora');
    let imageHora = document.querySelector('div#imgHora');
    let dataAtual = new Date();
    let horaAtual = dataAtual.getHours();

    if (horaAtual >= 4 && horaAtual < 12) {
        paragHora.innerHTML = `<p>Bom dia, agora são ${horaAtual} horas...</p>`;
        imageHora.style.background = "url('imagens/manha.jpg')";
        imageHora.style.backgroundPosition = "center center";
        bodySel.style.backgroundColor = "#92e1f5";
        mainCont.style.backgroundColor = "#b8e5f0";

    } else if (horaAtual >= 12 && horaAtual < 18) {
        paragHora.innerHTML = `<p>Boa tarde, agora são ${horaAtual} horas...</p>`;
        imageHora.style.background = "url('imagens/tarde.jpg')";
        imageHora.style.backgroundPosition = "bottom center";
        bodySel.style.backgroundColor = "#495b74";
        mainCont.style.backgroundColor = "#ffd5b9";
    } else {
        if (horaAtual == 0) {
            paragHora.innerHTML = `<p>Boa noite, agora é meia-noite...</p>`;
        } else {
            paragHora.innerHTML = `<p>Boa noite, agora são ${horaAtual} horas...</p>`;
        }

        imageHora.style.background = "url('imagens/noite.jpg')";
        imageHora.style.backgroundPosition = "top center";
        bodySel.style.backgroundColor = "#3a4047";
        mainCont.style.backgroundColor = "#d4d4d4";
    }
}