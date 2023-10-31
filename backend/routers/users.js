import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { getUserDetails } from "../modules/users.js";

const router = express.Router();
router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDetails = await getUserDetails(username);
    if (!userDetails) {
      return res.status(404).send({ message: "User not found." });
    } else if (userDetails.passwd === password) {
      res.status(200).send({ message: "Login successful" });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  } catch (error) {
    if (error.message === "Invalid email format") {
      res.status(400).send({ message: "Invalid email format." });
    } else {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
});

export default router;
