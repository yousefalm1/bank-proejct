import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/app/assets/logo.jpg';
import AuthButtons from './AuthButons';
import NavButton from './NavButton';
import { getUser } from '@/lib/token';
import Image from 'next/image';
import Link from 'next/link';

const DashboardNavbar = async ({ children, href }) => {
  const user = await getUser();

  return (
    <nav className="bg-background p-5 shadow-lg text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={user ? '/dashboard' : '/'}>
          <Image
            src={Logo}
            alt="logo"
            width={0}
            height={0}
            className="rounded-2xl w-14 h-14 object-cover"
          />
        </Link>
        {user && (
          <div className="flex space-x-6 ">
            <NavButton href="/dashboard">Dashboard</NavButton>
            <NavButton href="/dashboard/transactions">Transactions</NavButton>
            <NavButton href="/dashboard/users">Users</NavButton>
          </div>
        )}
        <div className="flex items-center space-x-4">
          <AuthButtons />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
