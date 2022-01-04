# Manejo de Errores 
## Strict
``` 'use strict' ```
al inicio de nuestro codigo para mandar error cuando no declaramos una variable. 

## Try - Catch
Captura errores, los Retiene y te los da en una variable, segun lo que esta dentro de ```try{}```
```js
'use strict'
try{
    x = 10;

}
catch(error){
    console.log(error)
}
```
_Output: [ReferenceError: x is not defined]_