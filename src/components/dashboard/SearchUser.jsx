'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';

const UserSearchWithAlertDialog = ({ users, setSelectedUser }) => {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const openAlertDialog = () => setIsAlertDialogOpen(true);
  const closeAlertDialog = () => {
    setIsAlertDialogOpen(false);
    setSearchTerm(''); // Clear the search term when closing
  };

  const handleCommandInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user?.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full ">
      {/* Main search input that opens the AlertDialog */}
      <Input
        placeholder="🔍 Search username..."
        onClick={openAlertDialog} // Open modal on click
        readOnly // Prevent typing here
        className="mb-4 w-full py-7 shadow-lg"
        usePointer
      />

      {/* AlertDialog containing the Command component for typing and searching */}
      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogContent className=" mx-auto bg-background p-6 rounded-lg shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Search Users</AlertDialogTitle>
          </AlertDialogHeader>

          <Command>
            <CommandInput
              placeholder="Type to search..."
              onChange={handleCommandInputChange}
              className="w-full "
            />
            <CommandList className="">
              {filteredUsers.length > 0 ? (
                <CommandGroup heading="Users">
                  {filteredUsers.map((user) => (
                    <CommandItem
                      key={user._id + 'khdbkf'}
                      onSelect={() => {
                        setSelectedUser(user);
                        closeAlertDialog();
                      }}
                    >
                      {user.username}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : (
                <CommandEmpty>No results found.</CommandEmpty>
              )}
            </CommandList>
          </Command>

          <AlertDialogCancel onClick={closeAlertDialog} className="mt-4">
            Close
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default UserSearchWithAlertDialog;
