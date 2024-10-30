import { GetAllUsers } from '@/actions/users/getAllUsers';
import { getTransactions } from '@/actions/transactions/getTransactions';
import { getProfile } from '@/actions/getProfile';
import MainDashboard from '@/components/dashboard/MainDashboard';
import { baseUrl } from '@/actions/config';

const Dashboard = async () => {
  const user = await getProfile();

  const transactions = await getTransactions();
  const users = await GetAllUsers();

  const handleOnChange = (e) => {};

  return (
    <>
      <MainDashboard
        user={user}
        users={users}
        transactions={transactions}
        baseUrl={baseUrl}
      />
    </>
  );
};

export default Dashboard;
