import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { logout } from '@/actions/auth';
import { getUser } from '@/lib/token';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { baseUrl } from '@/actions/config';

const AuthButtons = async () => {
  const user = await getUser();

  if (user)
    return (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Avatar>
              <AvatarImage src={`${baseUrl}/${user.image}`} />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={logout} className="text-destructive">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  return (
    <>
      <Button className="text-base px-8 py-4" variant="outline">
        <Link href="/login">Login</Link>
      </Button>

      <Button className="text-base" variant="default">
        <Link href="/register">Sign Up</Link>
      </Button>
    </>
  );
};

export default AuthButtons;
