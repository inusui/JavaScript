# Apuntes de Javascrpt 

# Apuntes de Herencia
[Codigo 09-02-Herencia](https://github.com/inusui/JavaScriptNotas/blob/8eb5406917342646ffa4981f0e2af099b28d2bd6/09-02-Herencia.js)


### Clases
Si dentro de una clase vamos a crear un funcion a esta no es necesaria ponerle la palabra reservada funcion 
```js
class SoyNombredeClase{
    
nombreCompleto(){//dentro de una clase no es necesario una funcion 
        
    }
}
```

### Sobreescritura
Modifica el comportamiento de la clase padre

```js
class soyClaseHija extends ClasePadre{
    constructor (Parametros, clase, Padre, UnParametroClaseHija){
        super (Parametros, clase)//llamando parametros
        this._UnParametroClaseHija = UnParametroClaseHija;
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
```
super, es usado para acceder a todos los metodos que hay en la clase padre. 

## Clase Object
es la clase padre de todas las clases. 
Si en las clases no se define que extiende desde object esta se agrega automaticamente. 

## Metodo toString 
mandar informacion del estado del objeto. 
es buena practica agregar este metodo al declarar nuestras clases. 

## Metodo Prototype
permite agregar atributos o metodos de forma dimanica a nuestras clases. 

## Polimorfismo
Desde un metodo se manda a llamar un metodo tanto de la clase padre como de la clase hija. 
Esto depende con el tipo de objeto que estamos trabajando

```js
class padre(){
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
        
    }
    toString(){
        return this.metodoClasePadre();
    }
}
class hija extends padre(){
constructor (Parametros, clase, Padre, UnParametroClaseHija){
        super (Parametros, clase)
        this._UnParametroClaseHija = UnParametroClaseHija;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento 

}
let padre1 = new padre ("Campos que recibe clase padre")
console.log(padre1.toString()); //se llama solo a la clase padre

let hija1 = new hija ("Recibe lo agregado a la clase hija")

console.log (hija1.toString());//se llama tanto clase padre y lo agregado en la clase hija

```
Dependiendo del objeto que estemos apuntando el codigo se comporta de manera un tanto diferente. 

* Polimorfismo: Multiples formas en ejecucion.
El metodo se ejcuta dependiendo si hace referencia a la clase padre o al hijo. 
_Es importante para reutilziar codigo._