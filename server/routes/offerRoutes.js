import express from "express";
import { addOffers, getOffers } from "../controller/offerController.js";

const router = express.Router()


router.post('/addOffer',addOffers)
router.get('/getOffers',getOffers)


export default router