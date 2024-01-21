import pool from "../Db/dbConfig.js";

export async function addOffers(req, res) {
    try {
        const {offer_type,discount_value} = req.body
        
        const newOffer = await pool.query("INSERT INTO offers (offer_type,discount_value) VALUES ($1,$2) RETURNING *", [offer_type,discount_value])

        res.json(newOffer.rows[0])
        
    } catch (error) {
        console.error(error);
    }
}