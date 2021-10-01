let persona1 = {
    nombre : 'Ricardo',
    apellido : 'Peluquin',
    nombreCompleto: function(titulo, tel){
        //return  this.nombre + " " +this.apellido;
        return titulo + " :" + this.nombre + " " +this.apellido + ", " + tel; 
        //como no son propiedades del objeto (persona) no se usa This 
    }
}

let persona2 = {
    nombre : 'Jeniffer',
    apellido : 'Saavedra'
}

//uso de Apply, a diferencia de call los argumentos se pasan con un arreglo
let arreglo = ['Lic,', '6666666'] 
console.log (persona1.nombreCompleto.apply(persona2, arreglo));