'use client';
import { useState, useEffect } from 'react';
import SearchTransaction from '@/components/searchTransaction/SearchTransaction';
import { getTransactions } from '@/actions/transactions/getTransactions';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
const TransactionsPage = ({ transactions, keyPrefix = '12323424s' }) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);
  const [searchFilters, setSearchFilters] = useState({
    amount: '',
    from: '',
    to: '',
    type: '',
  });

  useEffect(() => {
    async function fetchTransactions() {
      const data = await getTransactions();
      setFilteredTransactions(data);
    }
    fetchTransactions();
  }, []);

  useEffect(() => {
    setFilteredTransactions(
      transactions.filter((transaction) => {
        const { amount, from, to, type } = searchFilters;
        const transactionDate = new Date(transaction.createdAt);
        const fromDate = from ? new Date(from) : null;
        const toDate = to ? new Date(to) : null;

        const matchesAmount = amount
          ? transaction.amount.toString().includes(amount)
          : true;
        const matchesFromDate = fromDate ? transactionDate >= fromDate : true;
        const matchesToDate = toDate ? transactionDate >= toDate : true;

        const matchesType = type ? transaction.type === type : true;

        return matchesAmount && matchesFromDate && matchesToDate && matchesType;
      })
    );
  }, [searchFilters, transactions]);
  return (
    <div className="flex flex-col justify-center mt-7 w-3/4 p-6 rounded-lg shadow-lg bg-background text-foreground">
      <SearchTransaction className="mb-4" onSearchChange={setSearchFilters} />
      <Table className="border border-border rounded-md overflow-hidden shadow-sm">
        <TableCaption className="text-lg font-semibold text-foreground pb-4">
          A list of your recent transactions.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-muted border-b border-border">
            <TableHead className="w-[180px] p-4 text-sm text-muted-foreground">
              Transaction ID
            </TableHead>
            <TableHead className="w-[120px] p-4 text-sm text-muted-foreground">
              Type
            </TableHead>
            <TableHead className="w-[120px] p-4 text-sm text-muted-foreground text-right">
              Amount
            </TableHead>
            <TableHead className="w-[180px] p-4 text-sm text-muted-foreground text-right">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.map((transaction, index) => (
            <TableRow
              key={transaction._id}
              className={`${
                index % 2 === 0 ? 'bg-card' : 'bg-muted'
              } hover:bg-background  text-foreground border-b border-border`}
            >
              <TableCell
                className="p-4 font-medium text-card-foreground truncate"
                title={transaction._id}
              >
                {transaction._id}
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
              <TableCell className="p-4 text-right text-card-foreground font-semibold">
                {new Intl.NumberFormat('en-KW', {
                  style: 'decimal',
                  notation: 'compact',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(transaction.amount)}{' '}
                KWD
              </TableCell>
              <TableCell className="p-4 text-right text-card-foreground">
                {transaction.createdAt
                  ? format(
                      new Date(transaction.createdAt),
                      'MMM dd, yyyy, HH:mm'
                    )
                  : 'N/A'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionsPage;
