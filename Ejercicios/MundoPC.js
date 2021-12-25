class DispositivoEntrada{
    constructor (tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca
    }
    set marca(marca){
        this._marca = marca;
    }

}



class Raton extends DispositivoEntrada{
    static contadorRatones = 0

    constructor(tipoEntrada, marca){
        super (tipoEntrada, marca)
        this._idRaton = ++ Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `[ IdRaton: ${this._idRaton} | Tipo Entrada: ${this._tipoEntrada} | Marca: ${this._marca} ]`
    }

}
let raton1 = new Raton("USB", "RedDragon");
console.log(raton1.toString())

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0

    constructor(tipoEntrada, marca){
        super (tipoEntrada, marca)
        this._idTeclado = ++ Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `[ IdTeclado: ${this._idTeclado} | Tipo Entrada: ${this._tipoEntrada} | Marca: ${this._marca} ]`
    }

}
let teclado1 = new Teclado("USB", "RedDragon");
console.log(teclado1.toString())

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, size){
        this._idMonitor = ++ Monitor.contadorMonitores;
        this._marca = marca;
        this._size = size;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    get size(){
        return this._size;
    }
    set size(size){
        this._size = size;
    }

    toString(){
        return `[ IdMonitor: ${this._idMonitor} | Marca: ${this._marca}  |  Tamaño ${this._size} ]`
    }

}
let monitor1 = new Monitor("Asus", 18);
console.log(monitor1.toString())

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, Monitor, Teclado, Raton){
        this._idComputadoras = ++ Computadora.contadorComputadoras; 
        this._monitor = Monitor;
        this._teclado = Teclado;
        this._raton = Raton;
        this._nombre = nombre

    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }

    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }

    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre
    }

    toString(){
        return`Computadora: ${this._idComputadoras}
        Nombre: ${this._nombre}
        Monitor: ${this._monitor}
        Teclado: ${this._teclado}
        Raton ${this._raton}`
    }
}
let computadora1 = new Computadora("Asus", monitor1,teclado1, raton1);
console.log(computadora1.toString());

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorComputadoras;
        this._computadoras = Computadora = [];

    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }
    mostrarOrden(){
        let computadoraOrden = " ";
        for (let computadora of this._computadora){
            computadoraOrden += computadora.toString() + " ";
        }

        return `Orden N°${this._idOrden}
        Computadora: ${computadoraOrden}`
    }
}
let orden1 = new Orden();
orden1.mostrarOrden;