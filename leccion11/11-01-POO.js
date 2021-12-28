class Empleado{
    constructor (nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado:
        Nombre: ${this._nombre}, Sueldo: $${this._sueldo}`;
    }
}

class Gerente extends Empleado{ 
    constructor (nombre, sueldo, departamento){
        super (nombre, sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){//Se usa el mismo nombre que en la clase padre. 
        return `Gerente: ${super.obtenerDetalles()} \nDepartamento ${this._departamento}`;
    }

}
function imprimir (tipo){
    //Pasa diferentes metodos para llamar esta funcion. 
    //Una linea de codigo puede ejecutar ya sea el metodo obtenerDetalle de la clase padre o de la clase hija. 
    console.log (tipo.obtenerDetalles());
}


let gerente1 = new Gerente ('Carlos', 500, 'Sistemas');
//console.log (gerente1.obtenerDetalles());
let empleado1 = new Empleado('Juan', 200);

imprimir(empleado1);
imprimir(gerente1);

