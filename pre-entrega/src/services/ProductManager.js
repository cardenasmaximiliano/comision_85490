const fs = require('fs').promises;

//esto es una libreria de node que nos permite generar identificadores

const {v4: uuidv4} = require ('uuid')

class productManager {
    constructor(path){
        this.path = path;
    }

    async getProducts(){
        const data =  await fs.readFile(this.path, 'utf-8')
        return JSON.parse(data)

    }
    async getProductById(id){
        const products = await this.getProducts()
        return products.find(p => p.id === id)

    }

    async addProduct(product){
        const products = await this.getProducts()
        const newProduct = {id: uuidv4(), status: true, ...product}         
        products.push(newProduct);
        await fs.writeFile(this.path, JSON.stringify(products, null, 2))
        return newProduct

    }

async updateProduct(id, update){ ///actualizar cualquier producto dentro del json
    const products = await this.getProducts() //leer y parsear productos json. devuelve un array de prod.
    const index = products.findIndex( p => p.id === id) //buscar un id que coincida, si no coincide -1
    if( index === -1) return null; //si da -1 devolve null
    products[index]= {...products[index], ...update, id: products[index].id}
    /*
    ...products => valor actual
    ...update => valor nuevo
    id => aseguramos que no se modifique (para no sobre escribirlo)
    */
    await fs.writeFile(this.path, JSON.stringify(products,null,2)) //guardar el nuevo array en el productos.json
    return products[index]
}

async deleteProduct(id){ //eliminar un producto por un id
    const products = await this.getProducts()
    const updated = products.filter(p => p.id !==id)//crea array, donde estan los productos menos el del id
    if (products.length === updated.length)return null //esto revisa si un producto tenia ese id. => devuelve null
    await fs.writeFile(this.path, JSON.stringify(updated, null, 2)) //sobreescribe el json
    return true 
}


}
module.exports = productManager;