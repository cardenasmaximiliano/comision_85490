class  ProductManager{
    constructor(){
        this.products = [];
        this.currentId = 1; /*esto va a hacer mas adelante que sea autoincrementable */
    }


/*
Cada producto gestionado debe contar con las siguientes propiedades:
title (nombre del producto)

description (descripción del producto)

price (precio)

thumbnail (ruta de imagen)

code (código identificador)

stock (número de piezas disponibles)


Métodos a Implementar
addProduct
Este método debe agregar un producto al arreglo de productos inicial.

Debe validar que no se repita el campo code y que todos los campos sean obligatorios.

Al agregar un producto, debe crearse con un id autoincrementable.
 */

//metodo para agregar productos. 

addProduct({title,description,price,thumbnail,code,stock}){
    if(!title || !description || !price || !thumbnail || !code || !stock){
        console.log("todos los campos son obligatorios,campeon")
        return
    }
    //tenes que verificar si el campo code ya existe

    const codeExists = this.products.some( prod => prod.code === code);
    if (codeExists){
        console.log("ya existe un producto con el  codigo")
        return;
    }
    //some = vendria a ser un meto que nos verifica, si hay algun elemento que cumpla con la condicion
    
    //crear producto e ir agregandolo al array

    const newProduct = {
        id: this.currentId++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
    }
    this.products.push(newProduct);
    console.log("producto agregado", newProduct);

}
    //obtener los productos

/*
getProducts
Este método debe devolver el arreglo con todos los productos creados hasta el momento.


getProductById
Este método debe buscar en el arreglo el producto que coincida con el id.

En caso de no encontrar ningún id coincidente, debe mostrar en consola el error "Not found".
*/

    getProducts(){
        return this.products;
    }

    //buscar el producto por el iD

    getProductsById (id){
        const product = this.products.find(prod => prod.id === id );
        if(product){
            return product;
        } else{
            console.log("not found")
        }
    }
}


const manager = new ProductManager();

manager.addProduct({

    title:"mouse",
    description: "logitech 305",
    price: 100,
    thumbnail: "logitechG305.jpg",
    code:"LG123",
    stock: 2

});

manager.addProduct({

    title:"mouse",
    description: "logitech 306",
    price: 100,
    thumbnail: "logitechG306.jpg",
    code:"LG122",
    stock: 4

});

console.log(manager.getProducts());

console.log("esto es el id", manager.getProductsById(2))
console.log("esto es el id", manager.getProductsById(100))