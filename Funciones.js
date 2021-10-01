//declaracion de la funcion
function miFuncion(a, b){
    console.log(arguments.length); //No se puede usar fuera de las funciones. 
   return a + b;
}

let resultado = miFuncion(5 , 6);

console.log(resultado);

//Funcion de una sola ejecucion         Puede ser util al iniciar un programa. no es comun, puede ser util en algun caso
(function(a, b ){
    console.log("Ejecutanto" , a + b );
})(1 , 5 );


//Funciones como objetos.

function miFuncion(a, b){
    console.log(arguments.length); //No se puede usar fuera de las funciones. 
   return a + b;
}

let miFuncionText = miFuncion.toString();
console.log(miFuncionText);


//Funciones de tipo expresion
let x = function (a, b ){return a + b};         //Linea que se ejecuta termina con ;
console.log(x(1, 2));

//Funciones Flecha
const sumarFuncionFlecha = (a, b) => a + b;
console.log(sumarFuncionFlecha(3 , 5) );

let sumar = function (a , b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}
console.log(sumar(3 , ));

