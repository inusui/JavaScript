/*
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if (expresion)
        resolver(`Nice u got it`);
    else 
        rechazar(`Error`)
});


miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

miPromesa
.then(valor => console.log(valor))
.catch(error=>console.log(error))


let promesa = new Promise((resolver) => {
    console.log(`inicio de la promesa`);
    setTimeout( () => resolver(`Saludos con promesa y timeout`), 3000 );
    console.log(`fin de la promesa`);
});
*/
// promesa.then(valor => console.log(valor));


//* Ahora Async indica que una funcion regresa con promesa
async function miFuncionConPromesa (){
    return 'hola dentro de async';
}
miFuncionConPromesa().then (valor => console.log(valor));