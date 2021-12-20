class Persona{
    static contadorPersona = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this.idPersona = ++Persona.contadorPersona;
    }

    get IdPersona(){
        return this._idPersona;
    }
    get Nombre(){
        return this._nombre;

    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    get Apellido(){
        return this._apellido;

    }
    set Apellido(apellido){
        this._apellido = apellido;
    }
    get Edad(){
        return this._edad;

    }
    set Edad(edad){
        this._edad = edad;
    }
    toString(){
        return "Id Persona: " + this.idPersona + " Nombre: " + this._nombre + " " + this._apellido + " Edad: " + this._edad
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
    }

    get IdEmpleado(){
        return this.idPersona;
    }
    get Sueldo(){
        return this._sueldo;
    }
    set Sueldo (sueldo){
        this.sueldo = sueldo;
    }
    toString(){
        return super.toString() + ", Su sueldo es de: " + this._sueldo +" Dolares Quincenales"
    }

}

class Cliente extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date();
    }

    get IdCliente(){
        return this._idPersona;
    }
    set FechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    get FechaRegistro(){
        return this._fechaRegistro;
    }
    toString(){
        return super.toString() + ", Se Registro el: " + this._fechaRegistro 
    }

}

let persona1 = new Persona ("Ricardo", "Dominguez", 25);
console.log(persona1.toString());


let cliente1 = new Cliente ("Jeniffer", "Saavedra", 24);
console.log(cliente1.toString());

let empleado1 = new Empleado("Luna", "Moreno", "Canino", 250);
console.log(empleado1.toString())