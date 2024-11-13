// src/pages/api/auth/login.js

import db from '../../../utils/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // Check if user exists in the database
      const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
      const user = rows[0];

      if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // Check if the password is correct
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // Generate a JWT token
      const token = jwt.sign(
        { userId: user.id, username: user.username },
        process.env.JWT_SECRET || 'your_jwt_secret_key', // Set your JWT secret in .env
        { expiresIn: '1h' } // Token expiration time
      );

      // Send token as response
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
