const express = require('express');
const ProductRouters = require('./routers/products.rutas');
const cartRouters = require ('./routers/carts.rutas');

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/api/products',ProductRouters)
app.use('/api/carts',cartRouters)

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en http://localhost:${PORT}`)
})