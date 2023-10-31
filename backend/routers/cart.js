import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { setCartAndCartItems } from "../modules/cart.js";

const router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/create-cart', async (req, res) => {
    try {
      const customer_id = req.body.customer_id;
      const cart_items = req.body.cart_items;
      
      const userDetails = await setCartAndCartItems(customer_id, cart_items);
      
      res.status(200).json({
        message: 'Cart created successfully',
        data: userDetails
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  });
  

export default router;


