function verificarVel() {
    let vel = Number(document.querySelector('input#ivel').value);
    let msg = document.querySelector('div#res');

    msg.innerHTML = `<p>Sua velocidade atual é de ${vel} Km/h</p>`;

    msg.innerHTML += `<p>Limite de velocidade permitido: <strong>50 Km/h</strong></p>`;

    if (vel > 50) {
        msg.innerHTML += `<p>Você ultrapassou o limite de velocidade permitido!<br><strong>Multa sendo gerada...</strong></p>`;
    } else {
        msg.innerHTML += `<p>Você está dentro do limite permitido!</p>`;
    }

    msg.innerHTML += `<p>Dirija consciente! Utilize sempre o cinto de segurança!</p>`;
}