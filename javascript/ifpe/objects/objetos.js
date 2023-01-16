/*
// Declaração de objetos por atribuição

var triangle = new Object();


// Forma nº 1
triangle.sideA = 3;
triangle.sideB = 4;
triangle.sideC = 5;


// Forma nº 2
triangle['sideA'] = 3;
triangle['sideB'] = 4;
triangle['sideC'] = 5;

triangle['getArea'] = function () {
    var semiperimeter = (this.sideA + this.sideB + this.sideC) / 2;
    var calculation = semiperimeter * (semiperimeter - this.sideA) * (
    semiperimeter - this.sideB) * (semiperimeter - this.sideC);
    return Math.sqrt( calculation );
};
*/

// Criação de objetos literais

var triangle = {
    a: 3,
    b: 4,
    c: 5,
    getArea: function () {
    var semiperimeter = (this.a + this.b + this.c) / 2;
    var calculation = semiperimeter * (semiperimeter - this.a) * (
    semiperimeter - this.b) * (semiperimeter - this.c);
    return Math.sqrt(calculation);
    }
    };
    
// console.log(triangle.getArea());


// Operadores delete e in

let anObject = {left: 1, right: 2};

console.log(anObject.left); // 1

delete anObject.left;

console.log(anObject.left); // undefined
console.log("left" in anObject); // false
console.log("right" in anObject); // true


// Funções Object.keys e Object.assign
let objectA = {a: 1, b: 2};

console.log(Object.keys(objectA));

Object.assign(objectA, {b: 3, c: 4});

console.log(Object.keys(objectA));
console.log(objectA);
