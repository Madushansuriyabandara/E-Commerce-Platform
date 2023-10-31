import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import products from './routers/products.js'
import users from './routers/users.js'
import cart from './routers/cart.js'

const app = express();
app.use(cors());


app.use(products);
app.use(users);
app.use(cart);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
