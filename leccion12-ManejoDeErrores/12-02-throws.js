'use strict'
let resultado =  " ";

try {
    //x = 10;
    if(isNaN(resultado)) throw 'No es un número';
    else if (resultado === ' ') throw 'Es Cadena Vacia';
    else if (resultado >= 0 ) throw 'Valor Positivo';
    else if (resultado < 0 ) throw 'Valor Negativo';
    
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    
}
finally{
    console.log ('Termino la revision de errores');
}