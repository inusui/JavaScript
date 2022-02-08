
con la funcion regular puedo usar el Hoisting con la funcion flecha no, porque necesitas definir una variable. 

```js
const miFuncionFlecha = () =>   console.log("eh? enserio esto es una funcion flecha?");
```

## Funcion "flecha" multilinea 
```js
const saludar = () => {
    return "Ok, desde la funcion flecha";
}
```


## funcion con parametros
```js
const funcionConParametros = (mensaje) => {
    console.log(mensaje);
}

funcionConParametros("Envio algo a la funcion");
```

## Funcion enviando varios parametros
```js
const FunSumando = (op1 , op2) => {
    let resultado = op1 + op2;
    return resultado
}
console.log (FunSumando(5,8));
```
_OutPut:_```13```