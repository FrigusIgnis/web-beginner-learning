// Declaração de vetores
// -- Forma nº 1

var cars1 = new Array("Saab", "Volvo", "BMW");
// Ou, também, var cars = new Array(40);


// -- Forma nº 2 - Melhor opção (Notação literal)

var cars2 = ["Saab", "Volvo", "BMW"];


// Iteração de vetores

for (let car of cars2) {
    console.log(`${car}`);
}

// Vetor como uma pilha

let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]
let t = numeros.pop();
console.log(numeros); // [1, 2, 3]


// Vetor como uma lista

let m = numeros.shift();
console.log(numeros); // [2, 3]
numeros.unshift(5);
console.log(numeros); // [5, 2, 3]


/* Funções úteis

- forEach: Percorre o vetor e aplica determinada função em cada elemento presente nele.

- filter: Cria um novo vetor copiando apenas os elementos que satisfazem as condições que lhe foram impostas.

- map: Cria um novo vetor com os valores retornados por cada elemento a partir de uma dada função.

- reduce: Calcula um valor a partir de elementos do próprio vetor.

- sort: Ordena o vetor a partir de uma função de ordenação.

*/


// Rest parameters(...args)

function myFunc(a, b, ...args) {
    console.log(a); // 22
    console.log(b); // 98
    console.log(args); // [43, 3, 26]
}

myFunc(22, 98, 43, 3, 26);

var inputs = ["a", "b", "c", "d", "e", "f"];
myFunc(...inputs);

// Combinando vetores utilizando rest parameters

let featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
let specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];
let pizzas = [...featured, 'veg pizza', ...specialty];
console.log(pizzas);