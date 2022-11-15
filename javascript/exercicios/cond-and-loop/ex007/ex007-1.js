let idade = 21;

console.log(`Você tem ${idade} anos`);

if (idade < 16) {
    console.log(`Não vota`);
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`);
} else {
    console.log(`Voto obrigatório`);
} 


/* let idade = Number(document.querySelector('input#iidade').value);
let message = document.querySelector(`div#mesg`);

if (idade < 16) {
    message.innerHTML = `<p>Não vota</p>`;
} else if (idade < 18 || idade > 65) {
    message.innerHTML = `<p>Voto opcional</p>`;
} else {
    message.innerHTML = `<p>Voto obrigatório</p>`;
}
*/