import pool from "../Db/dbConfig.js";

export async function addProduct(req, res) {
    try {
        const { product_name, price, offer_id } = req.body

        const newProduct = await pool.query("INSERT INTO products (product_name,price,offer_id) VALUES ($1,$2,$3) RETURNING *", [product_name, price, offer_id])

        return res.json(newProduct.rows[0])


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });

    }
}
 
export async function getProducts(req, res) {
    try {

        const products = await pool.query('SELECT products.*,offers.* FROM products LEFT JOIN offers ON products.offer_id = offers.offer_id')
        res.json(products.rows)

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });

    }
}