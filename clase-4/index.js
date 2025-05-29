//manera antigua de levantar un servidor

// const http =require('http');
// http.createServer((req,res) => {
//     if(req.url=== '/' && req.method === 'GET'){
//         res.write("hola mundo")
//         res.end()}
// }).listen(3000)

/*
Express framework flexible minimalista.
Permite abtraer el modulo http 
permite manejar rutas, peticiones y respuesta de manera declarativa
facilitaba la gestion de middlewares, controlares y logica. 

middlware => intermediario entre el ciclo de solitud - respusta. 
es una funcion, nos va a permitir a nosotros añadir funcionalidades y 
flexibilidad de forma modular.

funciones => 
    autenticaciones 
    validar datos => 
    registros de errores 

    --
    existen middlewares externos => nos van a permitir añadir funcionalidades a express.

*/

// const express = require('express');

// const fs =require('fs'); //nos va a permitir leer el json 
// const path = require('path'); //nos va a servir para la ruta
// const app = express()
// const PORT = 3000;

// const userFilePath = path.join(__dirname,'users.json');

// app.use(express.json())

//obtener usuarios de archivo externo

// app.get("/users",(req,res)=>{
//     fs.readFile(userFilePath,'utf-8',(error,data)=>{
//         if(error){
//             return res.status(500).json({
//                 error:"error con la conexion"
//             });
            
//         }
//         const users = JSON.parse(data)
//         res.json(users)
//     })
// })

// app.get('/', (req,res) =>{
//     res.send(`
//         <h1>APRENDEMOS EXPRESS </h1>

//         `)
// })



// app.listen(PORT, ()=>{
//     console.log(`servidor ejecutandose en el puerto http://localhost:${PORT}`)
// })

/*
Antes en versiones anteriores a node 18 se usa nodemon
acutalmente se utiliza
 la linea de comandos, node --watch nombreDelArchivo


*/

/*
express => rutas dinamicas 

nos permiten capturar valores especificos proporcionados por el usuario en la url.

*/

// app.get('/users/:id',(req,res)=>{
//     const userId = req.params.id;
//     res.send(`mostrar informacion de un usuario con ID:${userId}`)
// })


/*
express => parametros
o consultas query parameters, son formas que tenemos de recibir los datos de usuario.
util cuando estamos haciendo busquedas, filtrados, o paginacion a nuestras apis.
*/
// app.get('/serch',(req,res)=>{
//     const terms = req.query.termino || "no esta especificado";
//     const category = req.query.categoria ||"todas";

//     res.send(`
//             <h2>resultado de busqueda</h2>
//         <p>termino: ${terms} </p>
//         <p>categoria: ${category}    </p>    `)
// })

/*
apis restful

componente que es fundamental en el desarrollo modernos, nos sirve para comunicar de 
manera eficiente, el front y el back en nuesdtras aplicaciones. 

representational state transfer => principios. de comunicacion. 

front => consumir apis.
back => aca ocurre la magia. 


get => solicitamos recursos del srvidor
post => cuando queramos enviar datos
put => remplazar recursos
patch => actualiza parcialmente recursos
delete => eliminarlos

*/


/*
POST => cuando desarrollamos una api, necesitamos que el cliente cree recursos. 



*/
const express = require('express');

const fs =require('fs'); //nos va a permitir leer el json 
const path = require('path'); //nos va a servir para la ruta
const app = express()
const PORT = 3000;

const userFilePath = path.join(__dirname,'users.json');

app.use(express.json()) //middleware  permite a la aplicación parsear automáticamente
//  las solicitudes entrantes con body en formato JSON. (falto esto)


//aca obtenemos los datos del json
app.get("/users",(req,res)=>{
    fs.readFile(userFilePath,'utf-8',(error,data)=>{
        if(error){
            return res.status(500).json({
                error:"error con la conexion"
            });
            
        }
        const users = JSON.parse(data)
        res.json(users)
    })
})

//aca sumamos datos

app.post('/users',(req,res)=>{
    const newUser = req.body;
    console.log(newUser)
    fs.readFile(userFilePath,'utf-8',(err,data)=>{
        if(err){
            return res.status(500).json({error:'error de conexion de datos'})
        }
        const users = JSON.parse(data);
        users.push(newUser);
        
        fs.writeFile(userFilePath,JSON.stringify(users,null,2) ,err =>{
            if(err){
                return res.status(500).json({error:'error de conexion de datos'})
            }
            res.status(201).json(newUser)
               
        })
    }

 
    )
})


//queremos actualizar el usuario (no lo vimos)

//podemos hacer la busqueda del id

app.put('/users/:id',(req,res)=>{
    const userId = parseInt(req,URLSearchParams.id, 10) // en este caso
    //chicos lo que necesitamos es que el dato que se va a obtener como string, se pase a numero
    //el 10 es solamente que represente base decimal
    const upDateoUser= req.body;

    //aca repetimos 
    fs.readFile(userFilePath, 'utf8', (error, data) => {
    if (error) {
      return res.status(500).json({ error: "Error con conexión de datos" });
    }
    let users = JSON.parse(data) // si se fijan chicos esto esta en let pq se modifica.

     users = users.map(user => {
       return user.id === userid ? {...user,...upDateoUser}:user  
       //el segundo id es el valor string q se convierte en numerico

    })//recorremos cada usuario. para aplicar los cambios
   fs.writeFile(userFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error al actualizar el usuario" });
      }
      res.json(upDateoUser);
    });
  });
});

/*
en postman chicos creen una nueva solicitud request pero que tenga put

Pongan  el puerto http://localhost:3000/users/2
*/

/*si queremos eliminar  */
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  
  fs.readFile(userFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error con conexión de datos" });
    }
    
    let users = JSON.parse(data);
    users = users.filter(user => user.id !== userId);
    
    fs.writeFile(userFilePath, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Error al eliminar usuario" });
      }
      
      res.status(204).send();
    });
  });
});

app.listen(PORT, ()=>{
    console.log(`servidor ejecutandose en el puerto http://localhost:${PORT}`)
})