const fs = require('fs').promises;

//esto es una libreria de node que nos permite generar identificadores

const {v4: uuidv4} = require ('uuid')

class CartManager {
    constructor(path){
        this.path = path;
    } 

async getCarts(){
    const data = await fs.readFile(this.path, 'utf-8')
    return JSON.parse(data)
}

async createCart(){ // creamos un carrito de compras
    const carts = await this.getCarts() // convierte el json en array 
    const newCart = {id: uuidv4(), products:[]} //crea el carrito segun essta estructura
    carts.push(newCart) //agrega el producto al carrito
    await fs.writeFile(this.path, JSON.stringify(carts,null,2)) //guarda todo en el carrito.json
    return newCart
}

async getCartById(id){
    const  carts = await this.getCarts
    return carts.find(c => c.id === id)

}

async addProductToCart(cid, pid){ //agregar el producto a un carrito
    const carts = await this.getCarts() // los carrito guardados en el json
    const cart = carts.find (c => c.id === cid) //buscar en el carrito un id i
    if (!cart)  return null //si no existe el carrito pedimos que de null
    const existenProductos = cart.products.find(p => p.product === id) //buscar si hay un producto en el carrito
    if(existenProductos){
        existenProductos.quantity++ //si el producto ya esta incremente en uno

    }else{
        carts.products.push({product: id, quantity:1}) //si el producto no esta, lo agregamos con un valor de 1
    }
    await fs.writeFile(this.path, JSON.stringify(carts,null,2)) //guardar cambios
    return cart //devolver carrito como respuesta
}
}

module.exports = CartManager