import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
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
import { Badge } from '@/components/ui/badge';

import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import { Button } from '../ui/button';

const TransactionHistoryTable = ({ transactions }) => {
  const latestFiveTransactions = transactions.slice(0, 3);

  return (
    <Card className="bg-background h-full shadow-lg border border-border p-4 md:p-4 lg:p-4">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
            History
          </h2>

          <AlertDialog>
            <AlertDialogTrigger asChild className="cursor-pointer">
              <CardDescription>
                <Button variant="ghost" className="w-6 md:w-8 lg:w-10">
                  <Maximize2 className="h-4 md:h-5 lg:h-6" />
                </Button>
              </CardDescription>
            </AlertDialogTrigger>

            <AlertDialogContent className="max-w-lg md:max-w-xl lg:max-w-2xl bg-background p-4 md:p-6 lg:p-8 rounded-lg shadow-lg max-h-[90vh]">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-lg md:text-xl lg:text-2xl font-semibold text-foreground">
                  All Transactions
                </AlertDialogTitle>
                <AlertDialogDescription className="text-sm md:text-base lg:text-lg text-muted-foreground">
                  A complete list of all your transactions.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <div className="overflow-y-auto max-h-[60vh] mt-4">
                <Table className="border border-border rounded-md overflow-hidden shadow-sm">
                  <TableHeader>
                    <TableRow className="bg-muted border-b border-border">
                      <TableHead className="w-[100px] p-2 md:p-4 text-xs md:text-sm text-muted-foreground">
                        Transaction ID
                      </TableHead>
                      <TableHead className="p-2 md:p-4 text-xs md:text-sm text-muted-foreground">
                        Method
                      </TableHead>
                      <TableHead className="p-2 md:p-4 text-xs md:text-sm text-muted-foreground text-right">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow
                        key={transaction._id + 'lzsdfjnjl'}
                        className="hover:bg-background text-foreground border-b border-border"
                      >
                        <TableCell className="p-2 md:p-4 font-medium">
                          <Badge variant="outline">{transaction._id}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={`${
                              transaction.type === 'deposit'
                                ? 'bg-green-500'
                                : 'bg-red-500'
                            }`}
                          >
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="p-2 md:p-4 text-right font-semibold">
                          {new Intl.NumberFormat('en-KW', {
                            style: 'decimal',
                            notation: 'compact',
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          }).format(transaction.amount)}
                          KWD
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <AlertDialogFooter className="mt-4 flex justify-end">
                <AlertDialogCancel asChild>
                  <button className="btn btn-secondary">Close</button>
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] p-2 md:p-4">
                Transaction ID
              </TableHead>
              <TableHead className="p-2 md:p-4">Method</TableHead>
              <TableHead className="text-right p-2 md:p-4">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {latestFiveTransactions.map((transaction) => (
              <TableRow key={transaction._id + 'wjsdnos'}>
                <TableCell className="p-2 md:p-4 font-medium">
                  <Badge variant="outline">{transaction._id}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    className={`${
                      transaction.type === 'deposit'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-right p-2 md:p-4">
                  {new Intl.NumberFormat('en-KW', {
                    style: 'decimal',
                    notation: 'compact',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(transaction.amount)}{' '}
                  KWD
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TransactionHistoryTable;
