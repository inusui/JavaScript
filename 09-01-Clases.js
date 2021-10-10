class Persona {
    constructor(nombre , apellido){//pasar parametros (aqui)
        this._nombre = nombre; 
        //Hace referencia a una nueva propiedad (lado Izquierdo) Se le asigna el parametro que entra a la clase (lo que esta arriba)
        this._apellido = apellido;
    }

    get nombre (){ //El nombre no debe ser el mismo que nuestros argumentos. 
        return this._nombre;
    }

    set nombre (nombre){
        this._nombre = nombre;
    }
}//Clase de Tipo Persona

let persona1 = new Persona('Juan', 'Perez'); 
console.log(persona1._nombre)
//Reservar espacio para crear objeto Persona, se le llama instancia de clase o objeto, llama al constructor de la clase. 
persona1.nombre = 'Juancito'
console.log (persona1.nombre);
let persona2 = new Persona("Pelin", "Cusi");
console.log(persona2);