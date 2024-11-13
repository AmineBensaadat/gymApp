// pages/api/users.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  // Connect to MySQL database
  const connection = await mysql.createConnection({
    host: 'localhost',         // MySQL host
    user: 'root',              // MySQL username
    password: '',              // MySQL password (empty if you're using root without password)
    database: 'ekattor8',     // MySQL database name
  });

  try {
    // Fetch all users from the 'users' table
    const [rows] = await connection.execute('SELECT * FROM users');
    
    // Send the data as JSON response
    res.status(200).json(rows);
  } catch (error) {
    // In case of error, send error message
    res.status(500).json({ message: 'Error fetching data', error });
  } finally {
    // Close the database connection
    await connection.end();
  }
}
