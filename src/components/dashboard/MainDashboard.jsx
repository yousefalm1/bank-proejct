'use client';
import { useGlobalState } from '@/app/context/GlobalStateContext';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import SendingMoneyContainer from '@/components/dashboard/SendingMoneyContainer';
import TransactionHistoryTable from '@/components/dashboard/TransactionHistoryTable';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  Table,
  TableCell,
} from '@/components/ui/table';
import TransferDialog from '@/components/Users/userTransferModal';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

function MainDashboard({ user, users, transactions, baseUrl }) {
  const { favorites, addToFavorites, removeFromFavorites } = useGlobalState();

  return (
    <>
      <div className="grid w-full grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 px-32">
        <WelcomeSection user={user} users={users} />
      </div>

      <SendingMoneyContainer />
      <div className="grid w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 px-32 mt-10">
        <TransactionHistoryTable transactions={transactions} />

        <Card className="bg-background h-full shadow-lg border border-border p-4 md:p-4 lg:p-4">
          <CardHeader>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
              Favorites
            </h2>
          </CardHeader>
          <CardContent>
            <div className=" overflow-y-auto">
              <Table className="border border-border rounded-lg overflow-hidden shadow-lg">
                {/* <TableHeader>
                  <TableRow>
                    <TableHead className="px-4 py-2 text-left text-sm font-semibold text-foreground">
                      User
                    </TableHead>
                    <TableHead className="px-4 py-2 text-sm font-semibold text-foreground">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader> */}
                <TableBody>
                  {favorites.map((favorite) => (
                    <TableRow
                      key={favorite._id}
                      className="hover:bg-muted/30 transition-colors duration-150"
                    >
                      <TableCell className="flex items-center space-x-2">
                        <Avatar className="w-12 h-12 rounded-full overflow-hidden bg-muted hover:scale-105 transition-transform duration-200">
                          <AvatarImage
                            src={`${baseUrl}/${favorite.image}`}
                            alt="User Avatar"
                          />
                          <AvatarFallback></AvatarFallback>
                        </Avatar>
                        <h1 className="text-base text-foreground">
                          {favorite.username}
                        </h1>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <TransferDialog user={favorite} profile={user} />
                        <Button
                          onClick={() => removeFromFavorites(favorite)}
                          variant="destructive"
                        >
                          <Trash2 />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default MainDashboard;
