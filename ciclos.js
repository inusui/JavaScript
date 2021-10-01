/*let contando = 3;
let condicion = true;

while(condicion){
    /*Iteraciones
    condicion = false;
}

do {
/*Iteraciones
    condicion = false;
}while(condicion);

for (let incremento = 0 ; incremento <3 ; incremento++){
/*Iteraciones

 }




do{
    console.log(contando);
    contando++;

}while (contando < 3 );


for (let incremento = 0 ; incremento < 3 ; incremento++){

    console.log(incremento);
}
*/

//***************************Break; en Ciclos           Lo que hace es romper el ciclo.
//************************  Continue; Si Break, rompe. continue lo continua
inicio:

for (let contador = 0 ; contador <= 10 ; contador++){
    
    if (contador % 2 != 0){ //Si no es par
        console.log(contador);
        continue inicio; //Siguiente iteracion del ciclo for
        console.log(contador); // Esto no se ejecuta. 
    
    }else{
        console.log(contador);
        //break; // Solo entra una vez. rompe por completo el ciclo. 
    }
    console.log("comprobando: " + contador);//esto no se ejecuta por el break

}

//* Etiquetas, ir a otra parte del programa. (no es mejor usar objetos?)


