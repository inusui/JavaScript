# Apuntes de Javascrpt 

## Apuntes de Herencia
[Codigo 09-02-Herencia](https://github.com/inusui/JavaScriptNotas/blob/8eb5406917342646ffa4981f0e2af099b28d2bd6/09-02-Herencia.js)


### Clases
Si dentro de una clase vamos a crear un funcion a esta no es necesaria ponerle la palabra reservada funcion 
```js
class SoyNombredeClase{
    
nombreCompleto(){//dentro de una clase no es necesario una funcion 
        
    }
}
```
* Si estas dentro de la misma carpeta puedes ```extends``` sin tener que importar o algo asi. 

Por ejemplo: dentro de la capeta "clases" tienes un documento que tiene la clase Persona y en otro documento la Clase Cliente que ```extends``` de Persona. Se puede!

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

### Clase Object
es la clase padre de todas las clases. 
Si en las clases no se define que extiende desde object esta se agrega automaticamente. 

### Metodo toString 
mandar informacion del estado del objeto. 
es buena practica agregar este metodo al declarar nuestras clases. 

### Metodo Prototype
permite agregar atributos o metodos de forma dimanica a nuestras clases. 

### Polimorfismo
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

### Static
se asocia con una clase pero no con sus metodos. 

la llamada a un metodo static se observa en consola. 

el metodo corre desde la clase no desde la llamada del metodo. 

Se puede acceder desde las clases hijas.

Se asocian con la clase 

```js
class Persona {
    static contadorObjetosPersona = 0; //Atributo Static 

    constructor(){
        Persona.contadorObjetosPersona ++;
        //Persona (clase).contadorObjetosPersona (Atributo asociado a ella)
    }
}
```

## Atributos no Statics

Son todos los atributos de nuestros metodos no staticos. 

Hay un metodo para crear atributos los cuales no estan asociadas a ningun metodo. 

```js

console.log(persona1.email ," |ahora desde la clase hija " ,  empleado1.email);
//Accede al atributo fuera de los metodos dentro de la clase. 

console.log(Persona.email);
//Indefinido
```
Si se intenta acceder al atributo noStatic desde la Clase dropeara un indefinido ya que no tiene "datos" que mostrar al no estar "declarado" con ningun Objeto/Metodo

## Variable de tipo Static que no queremos que se modifique. 
<h6>Variable que solo puede leer</h6>
no es una variable es una llamada al metodo static. 

```js
static get MAX_Objetos(){
        return 5;//solo se pueden ahcer 5 objetos
    }
```

_Si se usa get o set no es necesario el poner los ()_
```js
console.log(Persona.MAX_Objetos);
```
<h4> No se le puede asignar nada </h4>
Como no agregamos el metodo _set_ en la clase la variable ```Max_Objetos``` no puede cambiar

```js
console.log(Persona.MAX_Objetos);
//Output > 5

Persona.MAX_Objetos = 10;
console.log(Persona.MAX_Objetos);
//Output > 5
```


## Date()
establece la fecha actual
```js
new Date();
```


