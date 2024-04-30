import Product from "../models/productModel.js";

async function createProduct( req, res  ){
    try {

        const product = req.body;

        if( product.name.trim() == ''){

        }
        
        const newProduct = new Product(req.body);
        await newProduct.save();

        res.status(200).json({ newProduct});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

async function getProducts( req, res){
    try {
        
        const products = await Product.find()
        console.log(products)
        res.status(200).json({ message: 'Ok', data: products});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

const getProductsById = async () => {

}
// Exporto las funciones
export { createProduct, getProducts}