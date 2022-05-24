const button = document.getElementById('btn');

button.addEventListener('click',async function(){
    const module = await import('./file.js');
    module.hello();
})


//

const aBigNumber = 900584598053940395n;

const anotherBigNumber = BigInt(900584598053940395);

console.log(aBigNumber);
console.log(anotherBigNumber);


//

const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3])
.then(Response => console.log(Response));


//

