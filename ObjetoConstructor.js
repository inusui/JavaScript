/*Metodo Constructor

*/
//Funcion contructor de objetos de tipo Persona
function Persona(nombre, apellido, email){

    this.nombre = nombre; //al lado derecho es la variable que traemos de afuera de la funcion      y al izquierdo es la variable que se usa dentro de la funcion 
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){ //Cuando son funciones se pone si o si ()
        return this.nombre + " " + this.apellido;
    };

};
/*
let padre = new Persona("Raton", "Perez", "ratonperez@email.com");
console.log (padre);

let madre = new Persona ("Itzel", "Gonzalez", "ig@email.com");
console.log(madre.nombreCompleto());

padre.nombre = "RATONAZO";
console.log(padre.nombreCompleto()); //Si se llama una funcion si o si se ponen ()

//Distintas Formas de Crear Objetos
let miObjeto = new Object();
let miObjeto2 = {}; //Lo mas normal
let miCadena1 = new String(); //Clase de tipo STRING 

let miArregloFormal = new Array();
let miArregloComun = [];

let miFuncionFormal = new Function();
let miFuncionComun = function(){};
*/
//Prototype
Persona.prototype.tel = "666666";
let padre = new Persona("Raton", "Perez", "ratonperez@email.com");
console.log (padre.tel);
padre.tel = "7777"
console.log (padre.tel);


let madre = new Persona ("Itzel", "Gonzalez", "ig@email.com");
console.log(madre.tel);
