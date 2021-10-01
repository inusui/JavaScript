class Persona {
    constructor(nombre , apellido){//pasar parametros (aqui)
        this.nombre = nombre; //Hace referencia a una nueva propiedad (lado Izquierdo) Se le asigna el parametro que entra a la clase (lo que esta arriba)
        this.apellido = apellido;
    }
}//Clase de Tipo Persona

let persona1 = new Persona('Juan', 'Perez'); //Reservar espacio para crear objeto Persona, se le llama instancia de clase o objeto, llama al constructor de la clase. 

console.log (persona1);
