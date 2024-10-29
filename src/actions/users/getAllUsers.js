// Retrieves a list of all users and their account information using a GET request.
'use server';
import { baseUrl, getHeaders } from '@/actions/config';

export async function GetAllUsers() {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/users`, {
    method: 'GET',
    headers: await getHeaders(),
  });
  const users = await response.json();
  return users;
}
