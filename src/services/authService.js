// src/services/authService.js

import axios from 'axios';

const API_URL = '/api/auth';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data; // Assuming it returns the user data or a token
  } catch (error) {
    throw new Error('Login failed');
  }
};