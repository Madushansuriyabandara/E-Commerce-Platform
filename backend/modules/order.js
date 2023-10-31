import {pool} from './database.js'

export const setOrder = async (cartId, totalAmount, deliveryMethod, paymentMethod, orderDate, deliveryEstimate) => {
    const query = `
      INSERT INTO orders (cart_id, total_amount, delivery_method, payment_method, order_date, delivery_estimate) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
  
    try {
      // Using the pool to execute the query
      const [results] = await pool.execute(query, [cartId, totalAmount, deliveryMethod, paymentMethod, orderDate, deliveryEstimate]);
      console.log('Order inserted with ID:', results.insertId);
      return results.insertId; // Return the insertId if needed
    } catch (err) {
      console.error('Error executing query:', err);
      throw err; // Rethrow the error if you want to handle it later
    }
  };
  