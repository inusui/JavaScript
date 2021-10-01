let x = 10;

let persona = {
    nombre : "Ricardo",
    Apellido : "Dominguez",
    Email : "radg21@mail.com",
    edad: 24,
    nombreCompleto : function(){
        return this.nombre + " " + this.Apellido;
    }//This es una funcion que apunta al objeto en el que se esta ejecutando, osea lo que esta dentro del objeto/clase, etc
};

console.log(persona.nombreCompleto());

console.log("Todo el objeto" , persona ,"Un valor",  persona.nombre);

//Segunda forma de crear objetos

let persona2 = new Object(); //Metodo comun para crear objetos
persona2.nombre = "Ricardo";
persona2.direccion = "Chitre";
console.log (persona2.nombre);


//Acceder al objeto con cochetes

persona['Apellido']; 
//# Se puede recorrer el objeto con For In, tiene una sintaxis un tanto distinta
for (propiedad in persona){
    console.log (propiedad);
}

//Agregar y eliminar en los objetos
persona.telefono = "5555555555"; //Crear nueva propiedad y darle un valor

console.log(persona);
delete persona.telefono; //Eliminar el objeto persona.telefono de la coleccion persona.
console.log(persona);


//Otras formas para imprimir.  C
//# Concatenar cada vor
console.log (persona.nombre + ' ', persona.Apellido);

//con for in
for (print in persona){
    console.log(persona[print]);
}

//Objet Values
let personaArray = Object.values(persona);

console.log(personaArray);

let personaString = JSON.stringify (persona);
console.log(personaString);

