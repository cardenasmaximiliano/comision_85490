const express= require('express')
const handlebars= require('express-handlebars')
const app = express()
const formularioRouter = require('./routers/formulario.router');
const contactosApiRouter = require('./routers/api/contactos.router')

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views','./views')

//midleware => para servir archivos estaticos
app.use(express.static('public'))
//midleware para leer datos de formularios

app.use(express.urlencoded( {extended:true}))


app.use('/',formularioRouter)

app.use('/api/contactos',contactosApiRouter)


app.listen(3000, ()=>{
    console.log('servidor corriendo en el http://localhost:3000')
})


//routers son pequeñas aplicaciones que nos permiten agrupar rutas relacionadas.
//nos sirve para orgainzar el codigo. 
// modularidad, escalable, si trabajamos en equipo, nos va a limpiar el codigo en la app.js
