import { pool } from './database.js'

export async function insertOrder(orderData) {
    const { customer_id, total_amount, delivery_method, payment_method, order_date, delivery_estimate, cart_id } = orderData;
    const sql = `
      INSERT INTO orders (customer_id, total_amount, delivery_method, payment_method, order_date, delivery_estimate, cart_id)
      VALUES (?, ?, ?, ?, ?, ?, ?);
    `;
    
    const values = [customer_id, total_amount, delivery_method, payment_method, order_date, delivery_estimate, cart_id];
  
    try {
      const [result] = await pool.execute(sql, values);
      console.log('Insertion result:', result);
      return result;
    } catch (error) {
      console.error('Error during order insertion:', error);
      throw error;
    }
  }