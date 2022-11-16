function loading() {
    document.querySelector('div#msg').innerHTML = '<p>Preencha os campos acima para executar a verificação</p>';
}

function verificarIdade() {
    let dataAtual = new Date();
    let anoAtual = dataAtual.getFullYear();
    let ano = Number(document.querySelector('#iano').value);
    let gen = document.getElementsByName('genero');
    let message = document.querySelector('div#msg');

    if (ano == 0 || ano > anoAtual) {
        window.alert("Verifique os dados e tente novamente!");
    } else {
        let idade = anoAtual - ano;
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'imagem');

        if(gen[0].checked) {
            genero = 'homem';

            if(idade < 10) {
                img.setAttribute('src','imagens/crianca-m.jpg');
            } else {
                img.setAttribute('src','imagens/masc.jpg');
            }
        } else if(gen[1].checked) {
            genero = 'mulher';

            if( idade < 10) {
                img.setAttribute('src','imagens/crianca-f.jpg');
            } else {
                img.setAttribute('src','imagens/fem.jpg');
            }
        } else {
            genero = 'não-binário';

            if(idade < 10) {
                img.setAttribute('src','imagens/crianca-nb.jpg')
            } else {
                img.setAttribute('src','imagens/nb.jpg')
            }
        }

        message.style.textAlign = 'center';
        message.innerHTML = (`<p>Você é ${genero} e tem ${idade} ano(s)</p>`);
        message.appendChild(img);
    }
}