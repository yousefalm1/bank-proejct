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
  const latestFiveTransactions = transactions.slice(-5);

  return (
    <Card className="bg-background h-full shadow-lg border border-border">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-foreground">History</h2>

          {/* Show All Transactions Trigger */}
          <AlertDialog>
            <AlertDialogTrigger asChild className="cursor-pointer">
              <CardDescription className="">
                <Button variant="ghost" className="w-6">
                  <Maximize2 className="" />
                </Button>
              </CardDescription>
            </AlertDialogTrigger>

            {/* Full Transaction History Modal */}
            <AlertDialogContent className="max-w-2xl bg-background p-6 rounded-lg shadow-lg">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-xl font-semibold text-foreground">
                  All Transactions
                </AlertDialogTitle>
                <AlertDialogDescription className="text-muted-foreground">
                  A complete list of all your transactions.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <Table className="border border-border rounded-md overflow-hidden shadow-sm mt-4">
                <TableHeader>
                  <TableRow className="bg-muted border-b border-border">
                    <TableHead className="w-[100px] p-4 text-sm text-muted-foreground">
                      Transaction ID
                    </TableHead>
                    <TableHead className="p-4 text-sm text-muted-foreground">
                      Method
                    </TableHead>
                    <TableHead className="p-4 text-sm text-muted-foreground text-right">
                      Amount
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow
                      key={transaction._id}
                      className="hover:bg-background text-foreground border-b border-border"
                    >
                      <TableCell className="p-4 font-medium">
                        <Badge variant="outline"> {transaction._id}</Badge>
                      </TableCell>
                      <TableCell className="p-4 font-medium capitalize">
                        {transaction.type}
                      </TableCell>
                      <TableCell className="p-4 text-right font-semibold">
                        {transaction.amount.toFixed(2)} KD
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <AlertDialogFooter className="mt-4 flex justify-end">
                <AlertDialogCancel asChild>
                  <button className="btn btn-secondary">Close</button>
                </AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardHeader>

      {/* Display of Latest 5 Transactions */}
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"> Transaction ID</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {latestFiveTransactions.map((transaction) => (
              <TableRow key={transaction._id}>
                <TableCell className="font-medium">
                  {' '}
                  <Badge variant="outline"> {transaction._id}</Badge>
                </TableCell>
                <TableCell className="font-medium">
                  {transaction.type}
                </TableCell>
                <TableCell className="text-right">
                  {transaction.amount.toFixed(2)} KD
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
