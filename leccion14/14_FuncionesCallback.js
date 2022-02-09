/*
miFuncion1();
miFuncion2();

function miFuncion1(){
    console.log('funcion 1');

}
function miFuncion2(){
    console.log('Funcion 2');
}

// Funciones CallBack
function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1,op2, funcionCallBack){
    let resp = op1 + op2
    funcionCallBack(`Resultado: ${resp}`);

}
sumar(5,3,imprimir);//solo pasando el nombre de la funcion

// Llamadas Asincronas con uso setTimeout
function miFuncionCallBack(){
    console.log('luego de 3 seg me llaman');
}

setTimeout (miFuncionCallBack, 3000);

//pasando la funcion dentro

setTimeout( function(){console.log('Segundo llamado asincrono luego de 4s')}, 4000);

setTimeout ( () => console.log("Despues de 10s yo aparezco"), 10000);
 
*/
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}
//setInterval(reloj,1000);