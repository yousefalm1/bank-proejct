'use server';

import { baseUrl, getHeaders } from './config';

export const getProfile = async () => {
  const response = await fetch(`${baseUrl}/mini-project/api/auth/me`, {
    method: 'GET',
    headers: await getHeaders(),
  });
  const profile = await response.json();
  return profile;
};
