'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// import ProfileMenu from './ProfileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="bg-background p-4 shadow-md text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className=" text-xl font-bold">MyWebsite</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className=" text-foreground bg-border rounded-md px-3 py-2 text-base font-semibold "
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="/transactions"
            className="rounded-md px-3 py-2 text-base font-semibold text-primary bg-transparent hover:text-foreground hover:bg-secondary"
          >
            Transactions
          </Link>
          <Link
            href="/users"
            className="rounded-md px-3 py-2 text-base font-semibold text-primary bg-transparent hover:text-foreground hover:bg-highlight"
          >
            Users
          </Link>
          <ThemeToggle />
        </div>

        {/* Profile Menu (Visible on larger screens) */}
        <div className="hidden md:block relative">
          <button
            type="button"
            className="relative flex rounded-full text-sm "
            onClick={toggleProfileMenu}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-14 w-14 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User Profile"
            />
          </button>

          {/* Dropdown menu */}
          {isProfileMenuOpen && (
            <DropdownMenu>
              <DropdownMenuTrigger>Open</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            // <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-border py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            //   <Link
            //     href="/profile"
            //     className="block px-4 py-2 text-base text-foreground hover:bg-highlight rounded-md transition duration-200"
            //   >
            //     Your Profile
            //   </Link>

            //   <a
            //     href="#"
            //     className="block px-4 py-2 text-base text-foreground hover:bg-highlight rounded-md transition duration-200"
            //   >
            //     Sign out
            //   </a>
            // </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {/* Hamburger Icon */}
          <label className="flex flex-col gap-2 w-8 cursor-pointer">
            <input
              className="peer hidden"
              type="checkbox"
              onClick={toggleMenu}
            />
            <div className="rounded-2xl h-[3px] w-1/2 bg-foreground duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
            <div className="rounded-2xl h-[3px] w-full bg-foreground duration-500 peer-checked:-rotate-45"></div>
            <div className="rounded-2xl h-[3px] w-1/2 bg-foreground duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
          </label>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link
            href="/"
            className="block rounded-md bg-foreground px-3 py-2 text-base font-semibold text-white"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="/transactions"
            className="block rounded-md px-3 py-2 text-base font-semibold text-primary hover:bg-highlight hover:text-foreground transition duration-200"
          >
            Transactions
          </Link>
          <Link
            href="/users"
            className="block rounded-md px-3 py-2 text-base font-semibold text-primary hover:bg-highlight hover:text-foreground transition duration-200"
          >
            Users
          </Link>

          {/* Mobile Profile Menu */}
          <button
            className="flex items-center justify-center rounded-full"
            onClick={toggleProfileMenu}
          >
            <img
              className="h-14 w-14 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User Profile"
            />
          </button>
          {/* Mobile Dropdown */}
          {isProfileMenuOpen && (
            <div className="mt-2 space-y-2 bg-border rounded-md shadow-lg">
              <Link
                href="/profile"
                className="block px-4 py-2 text-base text-foreground hover:bg-highlight rounded-md transition duration-200"
              >
                Your Profile
              </Link>

              <a
                href="#"
                className="block px-4 py-2 text-base text-foreground hover:bg-highlight rounded-md transition duration-200"
              >
                Sign out
              </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
