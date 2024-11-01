'use client';
import { useState } from 'react';
import FavoriteDialog from '@/components/Users/FavoriteDialog';
import TransferDialog from '@/components/Users/userTransferModal';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Input } from '@/components/ui/input';

const ViewAllUsersComponent = ({ users, profile, baseUrl }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center mt-7 w-full bg-background  p-6 rounded-lg shadow-lg text-foreground">
      <Input
        type="text"
        placeholder="🔍 Search by username"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Table>
        <TableCaption className="text-lg font-semibold">
          Account Overview
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">User</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={`${baseUrl}/${user.image}`}
                      alt="User Avatar"
                    />
                    <AvatarFallback className="text-sm text-muted-foreground">
                      ?
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-foreground hover:underline cursor-pointer">
                    {user.username}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                {new Intl.NumberFormat('en-KW', {
                  style: 'decimal',
                  notation: 'compact',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(user.balance)}{' '}
                KWD
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <TransferDialog user={user} profile={profile} />
                  <FavoriteDialog user={user} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewAllUsersComponent;
