// src/pages/api/auth/register.js

import db from '../../../utils/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // Check if the user already exists
      const [existingUser] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

      if (existingUser.length > 0) {
        return res.status(400).json({ message: 'Username already taken' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the new user into the database
      const [result] = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [
        username,
        hashedPassword,
      ]);

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
