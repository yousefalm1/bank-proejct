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

const Transactions = async () => {
  const transactions = await getTransactions();

  return (
    <div className="flex justify-center mt-7 w-3/4 p-6 rounded-lg shadow-lg bg-background text-foreground">
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
          {transactions.map((transaction, index) => (
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
              <TableCell className="p-4 text-card-foreground capitalize">
                {transaction.type || 'N/A'}
              </TableCell>
              <TableCell className="p-4 text-right text-card-foreground font-semibold">
                ${transaction.amount.toFixed(2)}
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

export default Transactions;
