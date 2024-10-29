import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { baseUrl } from '@/actions/config';
import { Button } from '@/components/ui/button';
import { getProfile } from '@/actions/getProfile';
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
import { Input } from '../ui/input';
import TransferDialog from './userTransferModal';

const UserCards = ({ users, profile }) => {
  return (
    <>
      {users.map((user) => (
        <Card
          key={user._id}
          className="flex items-center p-4 w-80 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-border"
        >
          <Link key={user._id} href={`users/${user._id}`}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex justify-center items-center w-14 h-14 rounded-full overflow-hidden bg-muted hover:cursor-pointer hover:scale-105 transition-transform duration-150">
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
                </TooltipTrigger>
                <TooltipContent className="transition duration-300 ease-in-out">
                  <div className="p-1">
                    <p className="text-xs text-foreground ">View Profile</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>

          <section className="flex-grow pl-5 ml-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-base font-medium text-foreground truncate">
                {user.username}
              </h3>
              <span className="text-sm text-muted-foreground">
                {user.balance.toFixed(2)} KD
              </span>
            </div>
            <TransferDialog user={user} profile={profile} />
          </section>
        </Card>
      ))}
    </>
  );
};

export default UserCards;
