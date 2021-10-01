/* Get
Con Get no es necesario que en la llamada se pongan los ()
Ademas, no es necesario ponerle Function para poder crear el metodo.
*/


let persona = {
    nombre : "Ricardo",
    Apellido : "Dominguez",
    Email : "radg21@mail.com",
    edad: 24,
    idioma :'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto (){
        return this.nombre + " " + this.Apellido;
    }//This es una funcion que apunta al objeto en el que se esta ejecutando, osea lo que esta dentro del objeto/clase, etc
};

console.log(persona.lang);

/*  Set
Modificar los atributos del objetos

*/
persona.lang = 'en';
console.log(persona.lang, persona.idioma);