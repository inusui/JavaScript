# Notas Programacion Orientada a Objetos. 
## Sobre Escritura.

```js
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
    
}

let gerente1 = new Gerente ('Carlos', 500, 'Sistemas');
console.log (gerente1.obtenerDetalles());
```
en este metodo, la clase Empleado solo puede acceder a los datos de la clase Empleado, por lo tanto no conoce el departamento que se agrega en la clase hija.
Para ello. se usa la sobreescritura. 
En la clase hija (Empleado) se vuelve a establecer el mismo metodo, el mismo nombre. 
```js
obtenerDetalles(){//Se usa el mismo nombre que en la clase padre. 
        return `Gerente: ${super.obtenerDetalles()} Departamento ${this._departamento}`;
    }
```
Es importante agregar el ```super.obtenerDetalle()``` para que el nuevo metodo acceda a las variables ya declaradas en la clase padre. 

## Polimorfismo
con un mismo codigo acceder a diferentes metodos o clases.  
"Multiples" formas para llamar a la clase padre o hija. 

### Usando el mismo codigo del ejemplo anterior. 
se agrega una nueva funcion que accedera a ambos metodos. _El de la clase padre o de la clase hija_

es una funcion que va por fuera de las clases. 
```js
function imprimir (tipo){
    //Pasa diferentes metodos para llamar esta funcion. 
    //Una linea de codigo puede ejecutar ya sea el metodo obtenerDetalle de la clase padre o de la clase hija. 
    console.log (tipo.obtenerDetalles());
}
```
Segun lo que se le envie la fucnion "imprimir" retorna a lo que nos referimos. 
```js
imprimir(empleado1); //Empleado:         Nombre: Juan, Sueldo: $200 
imprimir(gerente1); //Gerente: Empleado:         Nombre: Carlos, Sueldo: $500  Departamento Sistemas 
``` 

## Instance of
_Intancia de_
Se una cuando necesitamos comparar o determinar en que instancia esta el tipo de objeto que queremos usar

```js
if (tipo instanceof Empleado){
        console.log ("es un objeto de tipo empleado")
    }
```
Se recomienda poner la clase de menos Jerarquia 

* Puede acceder a la Herencia. 
Cuando pedimos la instancai para tipo Empleado, nos manda 2. la de Gerente y la de empleado. 
Esto es porque Gerente extiende de Empleado. 
```js
if (tipo instanceof Empleado){
        console.log("Es de Tipo Empleado. ")
    }
```

En caso tal no queremos que nos envie ambas salidas simplemente usamos ``` else if ```
```js
 else if (tipo instanceof Empleado){
        console.log("Es de Tipo Empleado. ")
    }
    else if (tipo instanceof Object){
        console.log("Es de tipo Object.")
    }
```
* Puede acceder a la clase Object (clase padre de todas las clases.)