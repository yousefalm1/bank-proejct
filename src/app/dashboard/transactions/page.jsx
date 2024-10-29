import { getTransactions } from "@/actions/transactions/getTransactions";
import TransactionsPage from "@/components/TransactionsPage";

async function Transactions() {
  const transactions = await getTransactions();

  return <TransactionsPage transactions={transactions} />;
}

export default Transactions;
