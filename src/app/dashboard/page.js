import { getProfile } from "@/actions/getProfile";
import DepositForm from "@/components/deposit/depositForm";

const Dashboard = async () => {
  const user = await getProfile();

  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mt-8 px-20">
      <div className="bg-red-300 h-64">
        <h1 className="text-3xl font-semibold mb-2">
          Welcome, {user.username}
        </h1>
        <p>Take a look at your statistics</p>
        <h1>{user.balance}</h1>
      </div>
      <div className="bg-blue-300 h-64">
        <h1>1/3 Width</h1>
        <DepositForm />
      </div>

      <div></div>
    </div>
  );
};

export default Dashboard;
