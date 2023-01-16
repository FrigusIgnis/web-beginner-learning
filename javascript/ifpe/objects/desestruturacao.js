// Método tradicional
let someArray = [12,23,34];
var first = someArray[0];
var second = someArray[1];
var third = someArray[2];


// Desestruturação
var [first, second, third] = someArray;


// Extração de propriedades utilizando objetos
var robotA = { name: "Bender" };
var { name: nameA } = robotA;
console.log(nameA); // Bender

var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo); // lorem
console.log(bar); // ipsum

var [missing = true] = []; // Valor padrão para caso a propriedade não possa ser encontrada
console.log(missing); // true