const http = require('http');

//crea instancia de un servidor
const server = http.createServer((req, res)=>{

    //nos da el codigo de estado y cabezera HTTP
    res.writeHead(200,{'accept-encoding': 'text/plain'})
    //finalizacion de la respuesta
    res.end("hola, estamos creando nuestro servidor desde node")

})

server.listen(3000, ()=>{
    console.log('el servidor activo es http://localhost:3000')
})
