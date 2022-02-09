# callback
Hacer de una funcion argumento de otra funcion

* La llama de funciones en js es secuancial


```js
// Funciones CallBack
function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1,op2, funcionCallBack){
    let resp = op1 + op2
    funcionCallBack(`Resultado: ${resp}`);

}
sumar(5,3,imprimir);
```
# Timeout
Llama una funcion luego de un tiempo

```js
// Llamadas Asincronas con uso setTimeout
function miFuncionCallBack(){
    console.log('luego de 3 seg me llaman');
}

setTimeout (miFuncionCallBack, 3000);
```
* Llama luego de 3s
* esta en milisegundos
* se necesita funcion callBack (otra funcion)

## Timeout de una linea
contiene funciones o funciones flecha => dentro

```js
//pasando la funcion dentro

setTimeout( function(){console.log('Segundo llamado asincrono luego de 4s')}, 4000);

setTimeout ( () => console.log("Despues de 10s yo aparezco"), 10000);
```

## Set Interval.
en cada x tiempo se ejecuta la funcion

### Ejemplo de un reloj
```js
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}
setInterval(reloj,1000);
```