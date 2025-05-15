/*
variables => alojan en memoria un tipo de dato especifico que dependiendo la declaracion
se puede modificar o no
const
let

*/

// let nombre = 'maxi';
// nombre = 'maximiliano';

// const APELLIDO = 'cardenas';
// APELLIDO = 'Falcon';

// const persona ={nombre: 'maxi'}
// persona.nombre = "juan"; //no estamos en este caso cambiando la referencia.


/*

template strings => es una manera, mal dicha de concatenar.  alt + 96 ``

*/

// let saludo = `¿como estas? mi nombre es ${nombre}`;

// console.log(saludo)

/*

una manera de escribir funciones mas concisas. no cambia el valor de this. 

*/

// const saludar = ( nombre)=> `hola soy ${nombre}`;

// console.log(saludar("Pedro"));


//con funciones mas extensas
// const calcularEdad = (nacimiento) =>{
//         const anioActual = new Date().getFullYear();
//         return anioActual - nacimiento;
// }

// let edad = calcularEdad(1992);
// console.log(edad)

/*
for .. of => nos sirve para recorrer arrays, strings, sets



*/

// const alumnos = ["natasha", "matias", "lucas"];

// for (const alumno of alumnos){
//     console.log (alumno);
// }

// let alumnito = "mariano";

// for(const letra of alumnito){
//     console.log(letra)
// }

/*

    Reciben una lista de correos, donde algunos estan mal escritos (no poseen el @). 
    lo que tienen que hacer es recorrer la lista y quedarnos solo con los mails validos

*/

// const correos = [
//     "cliente1@gmail.com",
//      "cliente2gmail.com",
//       "cliente3@gmail.com",
//        "cliente4@gmail.com",
//         "cliente5gmail.com",
// ]

// const correos = [
//     "cliente1@gmail.com",
//      "cliente2gmail.com",
//       "cliente3@gmail.com",
//        "cliente4@gmail.com",
//         "cliente5gmail.com",
// ]

// let validos = true;
// for (const mail of correos) {
//     let at = false;
//     let com = false;
//     for(const letra of mail){
//         if (letra == "@") {
//             at = true;
//         }else if (letra == ".") {
//             com = true;
//         }
//     }
//     if (at && com) {
//         console.log(mail + " es valido");
//     } else {
//         console.log(mail + " no es valido");
//         validos = false;
//     }
// }

// promesas => modelo que maneja operaciones asincronas

/*
asicronia => no frena el codigo para hacer algo

javaScript es single-thereaded => javascript solo puede hacer una cosa a la vez. 

    EventLoop => coordina lo que se ejecuta en el codigo. maneja los eventos y tareas.

    tenes una pila de ejecucion => alojamos las funciones sincronas
    web Apis => manejar tareas asincronicas
    task queue => cola de tareas. una vez que se ejecutan las tareas se termina el callback.

    CALLBACK => VIENE A SER UNA FUNCION QUE PASA COMO ARGUMENTO A OTRA FUNCION. Y SE EJECUTA MAS TARDE, 
    EN EL MOMENTO DESPUES DE QUE SE COMPLETE UNA TAREA O EVENTO. 


    importante => el asincronismo esta para que no se bloquee el hilo principal de ejecucion
*/


// console.log("inicio");

// setTimeout(()=>{
//     console.log("proceso asincrono porque va a dispararse despues de 2")
// },2000);

// console.log("termino el ejemplo")


// callbacks

// function obtenerUsuario(id, callback){

//     setTimeout(()=>{
//         const usuario ={id, nombre:'maxi'};
//         callback(usuario);
//     },3000)

// }

// obtenerUsuario(7,(usuario)=>{
//     console.log("usuario recibido",usuario)
// })


//promesas encadenadas

// function paso1(){
//     return new Promise (resolve =>{
//         setTimeout(()=> resolve("paso 1 completado"),2000)
//     })
// }

// function paso2(){
//     return new Promise( resolve =>{
//         setTimeout(()=> resolve("paso 2 completado"), 4000)
//     })
// }

// paso1()
//     .then((res1)=>{
//         console.log(res1);
//         return paso2()
//     })
//     .then((res2)=>{
//         console.log(res2)
//     })


//cotizador
/**
 * http://api.exchangerate.host/live

? access_key = YOUR_ACCESS_KEY
& source = GBP
& currencies = USD,AUD,CAD,PLN,MXN
& format = 1
 * 
 * 
 */

const apiUrl = "http://api.exchangerate.host/live";
const api_key = "77ee7db747243c3bb616d8162f1770d3";

const origenSelect = document.getElementById("origen");
const destinoSelect = document.getElementById("destino");
const formulario = document.getElementById ("cotizador");
const resultadoDiv = document.getElementById("resultado")

//la manera moderna de escribir promesas trabajar asincronismo.

const monedasDisponibles = ["USD","EUR", "GBP","MXN"];

    function crearOpcionesMoneda(){
    
    monedasDisponibles.forEach((moneda)=>{
        const opcion1 = document.createElement("option");
        opcion1.value = moneda;
        opcion1.textContent = moneda;

    const opcion2 = opcion1.cloneNode(true); //cloneNode nos permite clonar un nodo HTML ya existente.

        origenSelect.appendChild(opcion1)
        destinoSelect.appendChild(opcion2)
    })
    origenSelect.value = "GBP";
    origenSelect.value = "EUR";
}

async function convertirDivisa(e){
    e.preventDefault();

    const monto = parseFloat(document.getElementById("monto").value);
    const origen = origenSelect.value;
    const destino = destinoSelect.value;

    if(!isNaN(monto) || monto <= 0 ){
        resultadoDiv.textContent = "ingresa un monto valido"
        return;
    }

    const url = `${apiUrl}?access_key=77ee7db747243c3bb616d8162f1770d3&source=${origen}&currencies=${destino}&format=1`;

    try{
        const res = await fetch(url);
        const data = await res.json();
        
        if(!data.success){
            resultadoDiv.textContent ="error al tener cotizacion"
            console.error (data.error || data);
            return
        }

        const key = `${origen}${destino}`;
        const tasa = data.quotes[key];

        const convertido = (monto * tasa).toFixed(2);
        resultadoDiv.textContent = `${monto} ${origen} = ${convertido} ${destino}`
    } catch(error){
        resultadoDiv.textContent = `error en la conexion`
        console.error(error)
    }

    }

    crearOpcionesMoneda ()
    formulario.addEventListener("submit",convertirDivisa);