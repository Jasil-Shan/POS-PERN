import pool from "../Db/dbConfig.js";

export async function addProduct(req, res) {
    try {
        const {product_name,price} = req.body
        console.log(req.body);

        const newProduct = await pool.query("INSERT INTO products (product_name,price) VALUES ($1,$2) RETURNING *", [product_name,price])

        res.json(newProduct.rows[0])
        
    } catch (error) {
        console.error(error);
    }
}
