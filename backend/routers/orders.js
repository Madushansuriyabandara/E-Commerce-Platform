import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { insertOrder } from "../modules/orders.js";

const router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.post('/api/insert-order', async (req, res) => {
    try {
      const { customer_id, total_amount, delivery_method, payment_method, order_date, delivery_estimate, cart_id } = req.body;
      const result = await insertOrder({ customer_id, total_amount, delivery_method, payment_method, order_date, delivery_estimate, cart_id });
      res.status(201).json({ message: 'Order inserted successfully', orderId: result.insertId });
    } catch (error) {
      console.error('API error:', error.message);
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });

export default router;


