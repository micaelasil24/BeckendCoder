
class ProductManager {
    constructor(){
        this.products = []
    }

    getProducts = () => {
        return this.products
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        const validationCode = this.products.find(
            (product) => product.code === code
        )
        if(validationCode) {
            console.log('El codigo ${validationCode} ya esta en uso')
            return;
        } else{
            if(this.products.length === 0){
                product.id = 1;
            } else{
                product.id = this.products[this.products.length - 1].id + 1;
            }
            this.products.push(product)
        }   
    }
    
    getProductById = (id) => {
        const productId = this.products.find((product) => product.id === id);
        if(!productId) {
            return "Producto no encontrado";
        } else{
            return productId;
        }
    }
}

module.exports = ProductManager;