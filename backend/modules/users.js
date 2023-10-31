import { pool } from "./database.js";

export async function getUserDetails(username) {
  let result;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(username)) {
    throw new Error("Invalid email format");
  }

  try {
    const query = "SELECT passwd FROM user WHERE email = ?";
    const [rows] = await pool.query(query, [username]);
    result = rows[0];
  } catch (error) {
    console.error("Error in getUserDetails:", error.message);
    throw error;
  } finally {
    return result;
  }
}
