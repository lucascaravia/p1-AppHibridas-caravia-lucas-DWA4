import express from "express";
import { createProduct, getProducts } from "../controllers/productController.js";
const router = express.Router();

router.use( express.json());

// Retorna todos los productos
router.get('/', getProducts)

// Agregar un Producto
router.post('/', createProduct)



export default router;