import UserSearchWithAlert from './SearchUser';

const WelcomeSection = ({ user, users, setSelectedUser }) => {
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
    <div className="p-6 md:p-8 lg:p-10 ms-[-30px]">
      <div className="space-y-2">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">
          {greetingText}, {user.username} 👋
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground">
          Your Total Balance
        </p>
      </div>

      <div className="mt-3">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
          {new Intl.NumberFormat('en-KW', {
            style: 'decimal',
            notation: 'compact',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(user.balance)}{' '}
          KWD
        </h1>
      </div>

      {/* <div className=" mt-8">
        <div className="flex">
          <div className="w-full md:w-full lg:w-1/2">
            <UserSearchWithAlert
              users={users}
              setSelectedUser={setSelectedUser}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default WelcomeSection;
