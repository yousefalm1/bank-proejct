'use server';

import { deleteToken } from '@/lib/token';
import { redirect } from 'next/navigation';

export async function logout() {
  // What do you need to do to logout?
  await deleteToken();
  // Where should you redirect the user?
  redirect(`/`);
}
