import { getUserById } from '@/actions/users/getUserById';

const UserDetails = async ({ params }) => {
  const { id } = await params;

  let user = await getUserById(id);

  const { username, balance } = user;
  return (
    <div>
      <h1 className="text-2xl font-bold">{username}</h1>
      <h2>
        {' '}
        {new Intl.NumberFormat('en-KW', {
          style: 'decimal',
          notation: 'compact',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(balance)}{' '}
        KWD
      </h2>
    </div>
  );
};

export default UserDetails;
