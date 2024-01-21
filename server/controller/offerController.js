import pool from "../Db/dbConfig.js";

export async function addOffers(req, res) {
    try {
        const {offer_type,discount_value,free_product_id} = req.body

        const newOffer = await pool.query("INSERT INTO offers (offer_type,discount_value,free_product_id) VALUES ($1,$2,$3) RETURNING *", [offer_type,discount_value,free_product_id])

        res.json(newOffer.rows[0])
        
    } catch (error) {
        console.error(error);
    }
}

export async function getOffers(req, res) {
    try {
        
        const newOffer = await pool.query("SELECT * FROM offers")

        res.json(newOffer.rows)
        
    } catch (error) {
        console.error(error);
    }
}