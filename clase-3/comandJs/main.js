// const cuentas = require('./cuentas');

// console.log(`sumar ${cuentas.sumar(5,3)}`);
// console.log(`restar ${cuentas.restar(5,3)}`);

//console => modulos que nos va a ayudar a administrar sucesos que puede llegar a tener nuestro proyecto

//console

//si queremos informacion similar.

console.info("console.info: similar a log, pero para mostrar informacion");
console.warn( "console.warn: nos va a mostar advertencias y siempre aparecen amarillo");
console.error("console.error: nos muestra errores.")

//console para crear tablas 

const usuarios = [
    {nombre:"juan" , edad: 25},
    {nombre:"pedro" , edad: 18},
    {nombre:"carlos" , edad:17},

]

console.table(usuarios);

