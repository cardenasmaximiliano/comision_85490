/**
handlebars => motor de plantillas.(template engine)
nos va a dejar generar paginas HTML dinamicas a partir de datos.

uso ? => separar la logica del servidor del diseño de las paginas. 


 */

const express = require('express')
//importamos las plantillas
const handlebars = require('express-handlebars');

const app = express()

//va a tomar handlebars como motor plantilla.

app.engine('handlebars', handlebars.engine())// h.e => inicializa la configuracion predeterminada

//estable la vista por defecto
app.set('view engine', 'handlebars')

//definir una carpeta donde se va a almacenar toda la parte de la vista
//se busque la carpeta views
app.set('views', './views')

//definimos ruta GET => para url raiz

app.get('/', (req, res)=>{
    
    //renderizamos la vista 'home'
    res.render('home',{
        //especificamos la vista donde se incrustar main.handlebars
        layout:'main',  
        //las variables dinamicas que van al motor de plantilla,

        title:'mi sitio',
        usuario:'Stiven',
        dia:'jueves'
    })
})

app.listen(3000,()=> console.log('servidor en http://localhost:3000'))