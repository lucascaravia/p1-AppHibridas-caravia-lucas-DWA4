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
const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        if( product ){
            res.status(200).json({ message: 'Ok', data: product });
        } else {
            res.status(404).json({ message: 'Producto no encontrado', data: {}})
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

const deleteProductById = async (req, res) => {
    try {
        
        const id = req.params.id;
        const products = await Product.findByIdAndDelete( id);
        res.status(200).json({ message: 'Ok', data: products});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error, data: []});
    }
}

const updateProductById = async( req, res) => {
    const id = req.params.id;
    const productOld = req.body;
    const product = await Product.findByIdAndUpdate( id, productOld  );
    if( product) {
        res.status(200).json({ message: 'Ok', data: product});
    } else {
        res.status(404).json({ message: 'OK', data: {} });
    }
}

// Exporto las funciones
export { createProduct, getProducts, getProductById, deleteProductById, updateProductById }