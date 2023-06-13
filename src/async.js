// async function f(){
//     console.log('hola');
//     return 'hola';
// }

// f().then(alert);

//Simulación de una petición asíncrona

async function f() {
    let promise = new Promise((res,rej) => {
        setTimeout(() => res('done'), 3000);
    })
    let result = await promise;

    alert(result);
}
f();

const btn = document.getElementById('btn-count');
const btnMenos = document.getElementById('btn-countMenos');
const p = document.getElementById('contador');

let counter = 0;

p.textContent = counter;

btn.addEventListener('click', async () => {
     await setTimeout(() => {
         counter++;
         p.textContent = counter;
     }, 500);
 })

 btnMenos.addEventListener('click', async () => {
    await setTimeout(() => {
        counter--;
        p.textContent = counter;
    }, 500);
})

// btn.addEventListener('click', async () => {
//     await setTimeout(() => {
//         console.log('Success');
//     }, 3000);
// })


// const btn = document.getElementById('btn-count');
// btn.addEventListener('click',async()=>{
//     await setTimeout(()=>{
//         console.log('Success');
//     },3000);
// })