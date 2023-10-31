import { pool } from "./database.js";

export async function setCartAndCartItems(customer_id, cart_items) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const [cartResult] = await connection.execute(
      "INSERT INTO cart (customer_id) VALUES (?)",
      [customer_id]
    );
    const cartId = cartResult.insertId;

    const insertCartItemQuery =
      "INSERT INTO cart_items (cart_id, product_id, variant_id) VALUES ?";
    const cartItemsData = cart_items.map((item) => [
      cartId,
      item.product_id,
      item.variant_id,
    ]);

    await connection.query(insertCartItemQuery, [cartItemsData]);

    await connection.commit();

    return {
      cartId: cartId,
      cartItemsCount: cart_items.length,
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

//   try {
//     const userDetails = await getUserDetails(1, [{ product_id: 101, variant_id: 201 }, { product_id: 102, variant_id: 202 }]);
//     console.log('User Details:', userDetails);
//   } catch (error) {
//     console.error('Error:', error);
//   }
