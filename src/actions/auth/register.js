// Handles user registration by sending a POST request with user data to create a new account.

'use server';

import { setToken } from '@/lib/token';
import { baseUrl } from '@/actions/config';

export const register = async (formData) => {
  try {
    const response = await fetch(`${baseUrl}/mini-project/api/auth/register`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Registration failed with status ${response.status}`);
    }

    const { token } = await response.json();
    await setToken(token);

    console.log('Registration successful');
  } catch (error) {
    console.error('Registration error:', error);
  }
};
