import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { setOrder } from "../modules/order";

const router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/create-order', async (req, res) => {
    const { cartId, totalAmount, deliveryMethod, paymentMethod, orderDate, deliveryEstimate } = req.body;
    try {
      const orderId = await setOrder(cartId, totalAmount, deliveryMethod, paymentMethod, orderDate, deliveryEstimate);
      res.status(201).json({
        message: 'Order created successfully',
        orderId: orderId
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error creating order',
        error: error.message
      });
    }
  });

export default router;
