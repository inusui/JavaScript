//Tipo String
var nombre = "Ricardo";

nombre = 20.5
console.log(typeof nombre);

var numero = 20;
console.log(numero);

//tipo de dato object

var objeto = {
    nombre : "Ricardo",
    apellido : "Dominguez",
    telefono : "66666666"
}
console.log(objeto);

//Tipo de dato Boolean (true or false)
var bandera = true
console.log(typeof bandera, bandera);

//Funcion
function miFuncion(){/*Aqui va el codigo*/}
console.log(typeof miFuncion, miFuncion);

//Symbol
var simbolo = Symbol("mi simbolo, valor unico de una variable");
console.log(typeof simbolo, String(simbolo) );

//class

class persona {
   constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

   }
}
console.log(persona, typeof persona);

//tipo undefined indefinito
var x;
console.log(x);
x = undefined; //Tambien se puede asignar como indefinido. 

//tipo aucencia de datos
var y = null;
console.log(y , typeof y);

//Tipo de dato Array la cual es un object
var autos = ['Ferrari','BMW', 'Audi', 'Nissan'];
console.log(autos, typeof autos);

//CAdena vacia
var CadenaEmpty = ' '
console.log(CadenaEmpty, typeof CadenaEmpty);

//Concatenar
var nombre = 'Ricardo';
var apellido = 'Dominguez';
var nombreCompleto = 2 + 4 + nombre + ' ' + apellido

console.log(nombreCompleto)


