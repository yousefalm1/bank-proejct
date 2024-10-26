'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const NavButton = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant="ghost"
      className={`text-base ${
        isActive
          ? 'text-primary border-b-2 border-primary'
          : 'hover:text-primary hover:border-b-2 hover:border-primary'
      }`}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default NavButton;
