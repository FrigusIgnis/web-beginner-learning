// Funções do próprio JSON para conversão de valores
// -- stringify para a conversão de string para objeto do tipo JSON
// -- parse para a conversão de objeto para string
let pessoa = {nome: "Fulano", idade: 23, salario: 1234.56, bolsista:
false};

let strPessoa = JSON.stringify(pessoa);

console.log(strPessoa);

console.log(JSON.parse(strPessoa).idade); // 23