class Persona{
    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersona;
    }

    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;

    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;

    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;

    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){
        return `Id Persona: ${this.idPersona} 
        Nombre: ${this._nombre} ${this._apellido} 
        Edad: ${this._edad}`
    }
}

class Empleado extends Persona{

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this.idPersona;
    }

    get sueldo(){
        return this._sueldo;
    }
    set sueldo (sueldo){
        this.sueldo = sueldo;
    }

    toString(){
        return `${super.toString()}
        Su sueldo es de: ${this._sueldo} Dolares Quincenales`;
    }

}

class Cliente extends Persona{

    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date();
    }

    get idCliente(){
        return this._idPersona;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    toString(){
        return `${super.toString()}
        Se Registro el: ${this._fechaRegistro}`;
    }

}

let persona1 = new Persona ("Ricardo", "Dominguez", 25);
console.log(persona1.toString());


let cliente1 = new Cliente ("Jeniffer", "Saavedra", 24);
console.log(cliente1.toString());

let empleado1 = new Empleado("Luna", "Moreno", 5, 250);
console.log(empleado1.toString())