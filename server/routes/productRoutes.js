import express from "express";
import { addProduct, getProducts } from "../controller/productController.js";

const router = express.Router()


router.post('/addProduct',addProduct)

router.get('/getProducts',getProducts)


export default router
