// /*
// javascript => debilmente tipado => lenguaje de alto nivel (lenguaje que esta
// lejano al lenguaje maquina (binario)).
// lenguaje que no es compilado, si no que es un lenguaje interpretado.

// Multiparadigma

// imperativa => se puede trabajar paso a paso
// orienta a objetos => clases
// funcional => se utilizar funciones. 

// jAVASCRIPT corre dentro de los navegadores, el motor v8. 

// motor V8.

// Javascript, nacio para ejecutar en el navegador instrucciones de manera sincronica. 
// MONOHILO, DE EJECUCION
// MULTIPLES HILOS, DE EJECUCION (ASINCRONIA)

// es que se puede usar entonces Javascript para el lado del front y el lado del back. 

// */

// /*
// dentro de los lenguajes de programacion existen algunas construcciones fundamentales.

// variables
// bucles
// objetos
// arreglos / arrays 
// funciones

// */
// /*
// variables => espacio de memoria reservado, que guarda informacion.

// let variable que nace en ecma6 y se puede modificar

// let edad declaracion
// edad = 28; inicializar 
// let edad = 28; inializando y declarando


// las constantes se deben declarar e inicializar.

// una buena practica para declarar constantes seria NOMBRE_APELLIDO 

// const NOMBRE_APELLIDO = "maxi";

// nombre = "pedro"

// console.log(nombre);


// VAR => es una variable que al dia de hoy se encuentra activa, pero no se recomienda por tema de scope.


// DENTRO DE LAS VARIABLES PODEMOS ALOJAR DIFERENTES TIPOS DE DATOS

// boolean => true false
// string => "una palabra" 'comillas simples' `alt + 96`
// numeros => 1 2 3 

// undefined => cuando no se asigna valor.
// null => cuando nosotros intencionalmente no le ponemos valor. 

// objetos => es una estructura que agrupa datos y funciones relacionadas. Se caracteriza por la estructura clave - valor

// array => una lista ordenada. Que nos interesan los metodos. 

// */

// /*
// bucles => algo que se repite.

// For => lo declaramos cuando sabemos la cantidad de veces que se va a ejecutar.

// while => se ejecuta hasta que se cumpla una condicion. do while, se ejecuta si o si una vez. 


// */

// //for 

// for (let i = 0; i <= 5 ; i++){
//     // inicializacion; condicion ; incrementador
//     console.log("vuelta", i)
// }

// let i = 0;

// while( i < 5){
//     console.log("se ejecutara",i);
//     i++
// }

// /*
// ejercicio => hagan un bucle que me devuelva los numero del 1 al 20

// */
// for (let i = 1; i <= 20; i++) {
//     console.log(i);
//   }

// /*objetos */

// /*objetos de notacion literal */
// let persona = {
//     nombre: "maxi",
//     edad: 32,
//     saludar: function(){
//         console.log("hola soy " + this.nombre)
//     }
// }
// persona.saludar()

// //new object()
// let producto = new Object();

// producto.nombre = "cafe";
// producto.precio = 2500;

// //funcion constructora => suelen tener la primera letra en mayuscula.

// // function Usuario(nombre, email){
// //     this.nombre = nombre;
// //     this.email = email
// // }

// // let user1 = new Usuario("emiliano", "terreneitor@gmail.com");

// //clases nacen en ecma6

// class Usuario{
//     constructor(nombre, email){
//         this.nombre = nombre;
//         this.email = email;
//     }
//     saludar(){
//         console.log(`hola, soy ${this.nombre}`)
//     }

// }

//funciones => bloque de codigo que ejecutan una tarea, estas tareas 
//se van a ejecutar cuando son llamadas, los nombres de las funciones
//suelen responder a la accion que se crea dentro. 

//funcion declarativa

// function saludar (){
//     console.log("hola")
// }

//funciones anonimas o de expresion

// const SALUDAR = function(){
//     console.log("hola")
// }

//funciones flecha => arrow 

// const SALUDAR = () => console.log("saludar")


//scope o ambito => es el alcance de las variables.
/*
    global => fueran de los funciones
    local => dentro de las funciones

*/

let global = "afuera";

function testeo(){
    let local = "padentro";
    console.log(global)
    console.log(local)
}
console.log(local)

testeo()