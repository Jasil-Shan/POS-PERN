import pool from "../Db/dbConfig.js";

export async function addProduct(req, res) {
    try {
        const {product_name,price} = req.body

        const newProduct = await pool.query("INSERT INTO products (product_name,price) VALUES ($1,$2) RETURNING *", [product_name,price])

        res.json(newProduct.rows[0])
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server Error'});

    }
}

export async function getProducts(req, res) {
    try {

        const products = await pool.query("SELECT * FROM products")

        res.json(products.rows)
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server Error'});

    }
}