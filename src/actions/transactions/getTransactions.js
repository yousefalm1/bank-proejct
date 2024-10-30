// Retrieves a list of transactions for the logged-in user using a GET request.
'use server';

import { baseUrl, getHeaders } from '@/actions/config';

export const getTransactions = async () => {
  const response = await fetch(`${baseUrl}/mini-project/api/transactions/my`, {
    method: 'GET',
    headers: await getHeaders(),
  });

  const transactions = await response.json();
  return transactions;
};
