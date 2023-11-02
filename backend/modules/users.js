import { pool } from "./database.js";

export async function getUserDetails(username) {
  let result;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(username)) {
    throw new Error("Invalid email format");
  }

  try {
    const query = "SELECT user_id, passwd FROM user WHERE email = ?";
    const [rows] = await pool.query(query, [username]);
    result = rows[0];
  } catch (error) {
    console.error("Error in getUserDetails:", error.message);
    throw error;
  } finally {
    return result;
  }
}

export async function isUserInMainCity(customerId) {
  const connection = await pool.getConnection();
  try {
    const query = 'SELECT address_city FROM user WHERE user_id = ?';
    const [rows] = await connection.execute(query, [customerId]);
    if (rows.length === 0) {
      throw new Error('User not found.');
    }

    const addressCity = rows[0].address_city;
    const cityCheckQuery = 'SELECT COUNT(*) AS count FROM cities WHERE city_name LIKE ?';
    const [cityRows] = await connection.execute(cityCheckQuery, [addressCity]);
    return cityRows[0].count > 0;
  } catch (error) {
    throw error;
  } finally {
    connection.release();
  }
}