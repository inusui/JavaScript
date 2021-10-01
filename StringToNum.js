let miNumero = "18";
//Not a Number

let edad ;

if (isNaN (miNumero)){
    console.log ("La variable: " , "edad",  " no es un numero")

}else{
     edad = (Number(miNumero) >=18 ) ? "Puede Votar" : "No puede Votar";
}

//let Resultado = (3<2) ? "Verdadero" : "falso";
console.log(edad);
