import { GetAllUsers } from '@/actions/users/getAllUsers';
import UserCards from '@/components/Users/UserCards';
import { getProfile } from '@/actions/getProfile';
import FavoriteDialog from '@/components/Users/FavoriteDialog';
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
import { baseUrl } from '@/actions/config';

import TransferDialog from '@/components/Users/userTransferModal';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const ViewAllUsers = async () => {
  const users = await GetAllUsers();
  const profile = await getProfile();

  return (
    <div className="flex justify-center mt-7 w-full md:w-3/4 p-6 rounded-lg shadow-lg bg-background text-foreground">
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
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-3">
                  <div className="flex justify-center items-center w-10 h-10 rounded-full overflow-hidden bg-muted hover:cursor-pointer hover:scale-105 transition-transform duration-150">
                    <Avatar className="w-full h-full">
                      <AvatarImage
                        src={`${baseUrl}/${user.image}`}
                        alt="User Avatar"
                      />
                      <AvatarFallback className="text-sm text-muted-foreground">
                        ?
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <span
                    className="text-foreground hover:underline cursor-pointer"
                    title={user.username}
                  >
                    {user.username}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-foreground ">
                  {new Intl.NumberFormat('en-KW', {
                    style: 'decimal',
                    notation: 'compact',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(user.balance)}{' '}
                  KWD
                </span>
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

export default ViewAllUsers;
