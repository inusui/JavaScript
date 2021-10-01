//let autos = new Array('Nissan' , 'Toyota', 'BMW');

const autos = ['Nissan' , 'Toyota', 'BMW'];//Nueva sintaxis

console.log (autos[0]);

for (let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}
autos[1] = 'Volvo';

console.log (autos[1]);

autos.push('Toyota');
for (let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}

//Si es un array
/*
con (type.of) solo nos dice que es un objeto.
*/

console.log( Array.isArray(autos));
//Devuelve true por lo tanto es arreglo. 

console.log( autos instanceof Array);
//Autos es una instancia tipo array?   true