import express from "express";
import { addOffers } from "../controller/offerController.js";

const router = express.Router()


router.post('/addOffer',addOffers)


export default router