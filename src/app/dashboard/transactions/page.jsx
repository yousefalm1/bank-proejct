import { getTransactions } from '@/actions/transactions/getTransactions';
import TransactionsPage from '@/components/TransactionsPage';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getProfile } from '@/actions/getProfile';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';

async function Transactions() {
  const transactions = await getTransactions();
  const user = await getProfile();

  return <TransactionsPage transactions={transactions} />;
}

export default Transactions;
