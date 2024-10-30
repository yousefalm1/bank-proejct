import { GetAllUsers } from '@/actions/users/getAllUsers';
import { getTransactions } from '@/actions/transactions/getTransactions';
import { Card } from '@/components/ui/card';
import SendingMoneyContainer from '@/components/dashboard/SendingMoneyContainer';
import UsersCreditCard from '@/components/dashboard/UsersCreditCard';
import TransactionHistoryTable from '@/components/dashboard/TransactionHistoryTable';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import MyLineChart from '@/components/MyLineChart';
import { getProfile } from '@/actions/getProfile';
import DepositForm from '@/components/deposit/depositForm';

const Dashboard = async () => {
  const user = await getProfile();
  const labels = [
    '2024-01-01',
    '2024-01-02',
    '2024-01-03',
    '2024-01-04',
    '2024-01-05',
    '2024-01-06',
    '2024-01-07',
    '2024-01-08',
    '2024-01-09',
    '2024-01-10',
    '2024-01-11',
    '2024-01-12',
    '2024-01-13',
    '2024-01-14',
    '2024-01-15',
    '2024-01-16',
    '2024-01-17',
    '2024-01-18',
    '2024-01-19',
    '2024-01-20',
  ];

  const datasets = [
    276, 212, 442, 342, 136, 372, 435, 144, 103, 312, 191, 316, 273, 123, 161,
    274, 446, 69, 301, 309,
  ];
  const transactions = await getTransactions();
  console.log(transactions);
  const users = await GetAllUsers();

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="grid w-full grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mt-14 px-32">
        <WelcomeSection user={user} users={users} />

        <UsersCreditCard user={user} />
      </div>

      <SendingMoneyContainer />
      <div className="grid w-full grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 px-32 mt-10">
        <TransactionHistoryTable transactions={transactions} />
        <Card className="bg-background h-full shadow-lg border border-border">
          <MyLineChart labels={labels} datasets={datasets} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
