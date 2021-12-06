class Persona { //Clase Padre 
    constructor(nombre , apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }

    get nombre (){ 
        return this._nombre;
    }

    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = this.apellido;
    }
    nombreCompleto(){//dentro de una clase no es necesario una funcion 
        return this._nombre + " " + this._apellido;
        
    }
}//Clase de Tipo Persona

class Empleado extends Persona{
    constructor(nombre, apellido , departamento){
        super(nombre, apellido); //Llama al constructor 
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobre escritura
    nombreCompleto(){
        //tiene que ser el mismo nombre que la clase padre. 
        //No recibe ningun parametro

        //necesitamos retornar
        return super.nombreCompleto() + ", " + this._departamento //Con super accedemos a los metodos que hay en la clase padre
        //de esa manera se reutiliza codigo
    }
}

let persona1 = new Persona("juan", "fernandez");
console.log(persona1);

let empleado1 = new Empleado("Maria", "Jimenez", "Finanzas");
console.log (empleado1.nombreCompleto());


