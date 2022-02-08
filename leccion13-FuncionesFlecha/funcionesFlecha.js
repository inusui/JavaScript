let miFuncion = function (){
    console.log ("la funcion");
}

/*let miFuncionFlecha = () => {
    console.log("eh? enserio esto es una funcion flecha?")
}*/

const miFuncionFlecha = () =>   console.log("eh? enserio esto es una funcion flecha?");

miFuncion();

//miFuncionFlecha();

const saludar = () => {
    return "Ok, desde la funcion flecha";
}
console.log(saludar());


const regresandoObj = () => ({ nombre: 'Juan', apellido: "profesor"}) ;

console.log (regresandoObj());

const funcionConParametros = (mensaje) =>  console.log(mensaje);

funcionConParametros("Envio algo a la funcion");

const FunSumando = (op1 , op2) => {
    let resultado = op1 + op2;
    return resultado
}
console.log (FunSumando(5,8));