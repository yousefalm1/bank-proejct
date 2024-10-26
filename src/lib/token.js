import 'server-only';

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

export const setToken = async (token) => {
  const cookieStore = await cookies();
  cookieStore.set('token', token);
};

export const getToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  return token;
};

export const deleteToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('token');
};

export async function getUser() {
  const token = await getToken();
  if (!token) return null;

  try {
    const user = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (user.exp < currentTime) {
      deleteToken();
      return null;
    }

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}
