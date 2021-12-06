# Apuntes de Javascrpt 

## Apuntes de Herencia
Aqui escribo 

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

# Pie de pagina?


