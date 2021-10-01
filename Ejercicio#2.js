let x  = 10; //tipos primitivos, no tiene ni atrubutos ni metodos asociados. 


function cambiarValor(a){
    a = 20;
    
}
cambiarValor(x);//
console.log(x);  

//Paso por referencia. 

const persona = {
    nombre : 'Ricardo' , 
    apellido : 'Dominguez'
}//Objeto
function cambiarValorObjeto (p1){
    p1.nombre = 'Antonio';
    p1.apellido = 'Gonzalez';
}
cambiarValorObjeto(persona);
console.log(persona);
