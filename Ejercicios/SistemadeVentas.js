class Producto{

    static contadorproducto = 0
    
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorproducto;
        this._nombre = nombre;
        this._precio = precio;

    }

    get idProcucto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `Nombre del Producto: ${this._nombre} Tiene como Identificador: ${this._idProducto}
        Su precio es: $${this._precio} `;
    }
}
class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS (){
        return 5;
    }
    constructor (){
        //no es herencia es agregacion. 
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = []; //array vacio. 
        //this._contadorProductosAgregados = 0; 
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos.push[this._contadorProductosAgregados++] = producto;
        }
        else{
            console.log("No se pueden agregar mas productos 😶")
        }
    }
    calcularTotal(){
        let totalVenta = 0 
        for(let producto of this._productos){
           totalVenta += producto.precio; //Totalventa = totalVenta + producto.precio. 
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productoOrden = " ";
        for (let producto of this._productos){
            productoOrden += producto.toString() + " ";
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal}, Productos: ${productoOrden}`);
    }
}


let procuto1 = new Producto("Cafe", 2);
 

let orden1 = new Orden();

orden1.agregarProducto(procuto1);

orden1.mostrarOrden();