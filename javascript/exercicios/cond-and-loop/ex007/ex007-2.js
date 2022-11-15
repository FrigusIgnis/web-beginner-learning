let horaAtual = new Date().getHours();

console.log(`Agora são, exatamente, ${horaAtual} horas.`);

if (horaAtual < 12) {
    console.log(`Bom Dia!`);
} else if (horaAtual <= 18) {
    console.log(`Boa Tarde!`);
} else {
    console.log(`Boa noite!`);
}