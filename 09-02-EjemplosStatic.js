class Persona { //Clase Padre 

    static contadorPersona = 0; //atributo de nuestra clase Persona

    static get MAX_Objetos(){
        return 3;//solo se pueden hacer hasta 5 objetos
    }

    constructor(nombre , apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        if (Persona.contadorPersona < Persona.MAX_Objetos){
          
          this.idPersona = ++Persona.contadorPersona; //Primero incrementa y luego asigna el valor

        }else{
            console.log("Se ha alcanzado el numero maximo de objetos permitidos");
        }


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
        return this.idPersona + " " +  this._nombre + " " + this._apellido;
        
    }
    //Sobre escribiendo el metodo de la clase padre (Object)
    toString(){
        //Se aplica polimorfismo -> Multiples formas en tiempo de ejecucion 
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo 
        //Importante para reutilizar codigo 
        return this.nombreCompleto(); //Se reutiliza el codigo del metodo nombreCompleto(), se hace una sola llamada

    }
    static saludar (){
        console.log("Hola");
    }
    static saludar2 (persona){
        console.log(persona.nombre , " " , persona.apellido);
       
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

let persona1 = new Persona("Juan", "fernandez");

console.log(persona1.toString())

let empleado1 = new Empleado("Maria", "Jimenez", "Finanzas");
console.log(empleado1.toString()); 

console.log(Persona.contadorPersona);

console.log(Persona.MAX_Objetos);

Persona.MAX_Objetos = 10;
console.log(Persona.MAX_Objetos);

let empleado2 = new Empleado("Maria", "Jimenez", "Finanzas");

let empleado3 = new Empleado("Maria", "Jimenez", "Finanzas");

console.log(empleado3.toString());