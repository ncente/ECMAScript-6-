// Operador de reposo

const obj = {
    name: 'Nestor',
    age: 30,
    country: 'CO'
}

let { name, ...all } = obj;

console.log(name, all);
console.log(all);


//unir elementos de obj a un nuevo obj

const obj = {
    name: 'Nestor',
    age: 30
}

const obj1 = {
    ...obj
    country: 'CO'
}

console.log(obj1);


//Promise finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve('Hello World')
        : reject(new Error('Test Error'))
    })
}

helloWorld()
    .then(Response => console.log(Response))
    .catch(error => console.error())
    .finally(() => console.log('Finalizo'));


// regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
