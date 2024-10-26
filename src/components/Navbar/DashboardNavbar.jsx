import ThemeToggle from '@/components/ThemeToggle';

import AuthButtons from './AuthButons';
import NavButton from './NavButton';

const DashboardNavbar = async ({ children, href }) => {
  return (
    <nav className="bg-background p-4 shadow-md text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">The Logo</div>

        {/* Four buttons in the middle */}
        <div className="flex space-x-6 ">
          {' '}
          <NavButton href="/">Home</NavButton>
          <NavButton href="/transaction">Transactions</NavButton>
          <NavButton href="/users">Users</NavButton>
          <NavButton href="/profile">Profile</NavButton>
        </div>

        {/* Two buttons on the right and ThemeToggle */}
        <div className="flex items-center space-x-4">
          <AuthButtons />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
