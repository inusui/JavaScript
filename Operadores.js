let a = 3 , b = 5;

console.log("Resultado: ", a + b);

console.log("Resultado: "+ a + b);
/*por la cuestion de los String, como empieza con un string ve todo la linea como string. 
entonces al "sumar a + b" los toma con string haciendo que sea 35*/
/* Operadores + - * / ** 

% Residuo


--Decrece
++incremento 
*/ 

//pre-incremento el operador ++ antes de la variable
let z = a + b
z = ++a
console.log(a)
console.log(z)

//* post-incremento operador ++ despues de la variable
z = a++
console.log(a)
//Incrementa a la siguiente vez que se vaya a utilizar la variable a la que se le esta incrementando. 
console.log(z)

//pre-decremento
z = --a
console.log(a)
console.log(z)

//post-decremento
z = a--
console.log(a)
console.log(z)


a = 3 , b = 2 ;
let c = 1;

//              Operadores de asignacion
// = 
a = 5;

//+= incrementa segun lo que se le asigna          
a /= 3; //osea aqui es 4 ahora. se suma lo que se le asigna                  a = a + 3;
console.log(a);
//# Se puede aplicar a otros operadores aritmeticos
// -=           *=      /=      %=      **=


//          Operadores de Comparacion,      la respuesta es true or false

a = 3, b = 2, c = "3";

let trueOrFalse = c == a;// compeba los valores si el tipo de dato es distinto lo convierte para comprobar

console.log(trueOrFalse);
trueOrFalse = a === c; //Compueba los valores y los tipos, si alguno de estos es distinto arroja false 
console.log(trueOrFalse); 

trueOrFalse = a !== c;  //Estricto son diferentes entonces SI son diferentes revisando los tipos 
console.log(trueOrFalse);

//  >       >=      <       <=

//Par o inpar

a = 9;
if ( a % 2 == 0){
    console.log(a , ' Es par');
}else{
    console.log(a , " No es par");
}

//Operadores logicos AND el cual es &&          OR es ||    

//Operador ternario?

let Resultado = (3<2) ? "Verdadero" : "falso";

Resultado = ( a % 2) ? "Par" : "Inpar";
console.log(Resultado)