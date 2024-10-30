import DepositCard from './DepositCard';
import WithdrawCard from './WithdrawCard';

const SendingMoneyContainer = () => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 px-32 ">
      <DepositCard />
      <WithdrawCard />
    </div>
  );
};

export default SendingMoneyContainer;
