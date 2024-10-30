import UserSearchWithAlert from './SearchUser';

const WelcomeSection = ({ user, users }) => {
  const currentTime = new Date().getHours();
  let greetingText = '';

  if (currentTime < 12) {
    greetingText = 'Good Morning';
  } else if (currentTime < 18) {
    greetingText = 'Good Afternoon';
  } else {
    greetingText = 'Good Evening';
  }
  return (
    <div className="h-64">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold mb-2">
          {greetingText}, {user.username} 👋
        </h1>
        <p className="text-xl font-medium text-muted-foreground">
          Your total balance
        </p>
      </div>
      <div className="mt-3">
        <h1 className="text-6xl font-semibold">
          {' '}
          {new Intl.NumberFormat('en-KW', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(user.balance)}{' '}
          KWD
        </h1>
      </div>

      <div className="flex mt-[90px]  ">
        <div className="w-1/2  ">
          <UserSearchWithAlert users={users} />
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
