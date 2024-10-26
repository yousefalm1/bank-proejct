import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { logout } from '@/actions/auth';
import { getUser } from '@/lib/token';

const AuthButtons = async () => {
  const user = await getUser();

  if (user)
    return (
      <Button onClick={logout} variant="destructive">
        Logout
      </Button>
    );
  return (
    <>
      <Button className="text-base" variant="outline">
        <Link href="/login">Login</Link>
      </Button>

      <Button className="text-base" variant="default">
        <Link href="/register">Sign Up</Link>
      </Button>
    </>
  );
};

export default AuthButtons;
