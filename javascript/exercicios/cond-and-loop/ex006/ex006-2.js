function verificarNat() {
    let pais = document.querySelector('input#ipais').value;
    let isNat = document.getElementsByName('nnatural');
    let message = document.querySelector('div#mesg');
    let checkNat = null;

    for(let i = 0; i < isNat.length; i++) {
        if(isNat[i].checked) {
            checkNat = isNat[i].value;
            break;
        }
    }

    if (checkNat == "Sim") {
        message.innerHTML = `<p>Você mora e é natural do país ${pais}</p>`;
    } else {
        message.innerHTML = `<p>Você mora no país ${pais} mas é estrangeiro</p>`;
    }
    
}