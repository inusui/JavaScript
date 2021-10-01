let numero = 3;
if(numero == 1){
    console.log("es el numero: ", numero);
}else if (numero == 2){
    console.log("es el numero: ", numero);
}else if(numero == 3){
    console.log("es el numero: ", numero);
}else{
    console.log("Ninguna de las anteriores. --->: ", numero);
}

let mes = 4 , estacion ;
if (mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}else if (mes == 3 || mes == 4 || mes == 5 ){
    estacion = "Primavera";
}else if (mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Verano";
}else if (mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
}else{
    estacion = "Valor Incorrecto";
}
console.log(estacion);


//* Switch
let mes = 4 , estacion ;

switch (mes){ //las comparaciones son estrictas. por lo tanto tambien compara los tipos de los datos.
    case 1: case 2: case 12:
        estacion = " Invierno ";
        break;
    case 3: case 4: case 5:
        estacion = " Primavera ";
        break;
    case 6: case 7: case 8:
        estacion = " Verano ";
        break;
    case 9: case 10: case 11:       
        estacion = " Otoño ";
        break;
    default:
        estacion = "Valor Incorrecto";
}console.log(numeroTexto);