let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());


// Flat map

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));


// trimStart elimina los espacios al inicio

let hello = '    hello world';

console.log(hello);
console.log(hello.trimStart);


// trimEnd elimina espacios al finak

let hello = 'hello world      ';

console.log(hello);
console.log(hello.trimEnd);


// fromEntries

let entries = [['name', 'oscar'], ['age', 30]];

console.log(Object.fromEntries(entries))


// description

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);