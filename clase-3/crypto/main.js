const crypto = require('crypto');

//generamos identificaciones unicas

const uuid = crypto.randomUUID();

//generamos hash

const mensaje = "keysecreta123";

//vamos a crear un algoritmo para la contraseña

const hash = crypto.createHash('sha256').update(mensaje).digest('hex')

console.log(hash)