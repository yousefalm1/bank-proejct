import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import Link from 'next/link';

const DashboardNavbar = () => {
  return (
    <nav className="bg-background p-4 shadow-md text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">The Logo</div>

        {/* Four buttons in the middle */}
        <div className="flex space-x-6 ">
          {/* Home Button with Active Class */}
          <Button
            variant="ghost"
            className=" text-base text-primary border-b-2 border-primary"
          >
            <Link href="/">Home</Link>
          </Button>
          {/* Transactions Button without Active Class */}
          <Button
            variant="ghost"
            className=" text-base hover:text-primary hover:border-b-2 hover:border-primary"
          >
            <Link href="/transaction">Transactions</Link>
          </Button>
          {/* User Button without Active Class */}
          <Button
            variant="ghost"
            className=" text-base hover:text-primary hover:border-b-2 hover:border-primary"
          >
            <Link href="/users">Users</Link>
          </Button>
          {/* Profile Button without Active Class */}
          <Button
            variant="ghost"
            className=" text-base hover:text-primary hover:border-b-2 hover:border-primary"
          >
            <Link href="/profile">Profile</Link>
          </Button>
        </div>

        {/* Two buttons on the right and ThemeToggle */}
        <div className="flex items-center space-x-4">
          <Button className="text-base" variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button className="text-base" variant="default">
            <Link href="/register">Sign Up</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
