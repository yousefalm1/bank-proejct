import { getAllUsers } from '@/actions/users/getAllUsers';

const ViewAllUsers = async () => {
  const users = await getAllUsers();
  return (
    <div className="flex justify-center mt-7">
      <h1 className="text-6xl">View All Users Page</h1>

      {users.map((user) => (
        <h1 key={user.username}>{user.username}</h1>
      ))}
    </div>
  );
};

export default ViewAllUsers;
