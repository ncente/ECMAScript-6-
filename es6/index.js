function newFunction(name, age, country) {
    var name = name || 'Nestor';
    var age = age || 30;
    var country = country || 'Colombia';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Nestor', age = 30, country = 'Colombia'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Centeno', '31', 'CO')


// Template literal

let hello = ' hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`; //es6
console.log(epicPhrase2);


// Multilineae

let lorem = 'Esto es una frase epica, para nuestro ejemplo \n' + 'otra frase en otra linea.';

let lorem2 = `esta es la nueva de version es6,
hace otra line`; //es6

console.log(lorem);
console.log(lorem2);


// Destructurar elementos

let person = {
    'name': 'Nestor',
    'age': '30',
    'country': 'CO'
}

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age);


// Operador de propagacion 

let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Vale','Yesica','Camila'];

let education = ['David', ...team1, ...team2]; // unir equipos por tre puntos ...

console.log(education);

// Let y Var

{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let' // let es solo para el scope
    console.log(globalLet);
}

console.log(globalVar); // var vive en global

// Const

const a = 'b';
a = 'a'; // no deja cambiar el valor, mantiene siempre la asignacion inicial 
console.log(a)

//Propiedad de objetos mejorada

let name = 'Nestor';
let age = 30;

obj = { name: name, age: age}; // es5

obj2 = { name, age}; // es6 De esta forma es mas amigable para crear los elemnetos
console.log(obj2);


// Arrow function, funciones de tipo flecha

const names = [
    {name: 'Nestor', age: 30},
    {name: 'Centeno', age: 29}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let lsitOfNames2 = names.map(item => console.log(item.name));