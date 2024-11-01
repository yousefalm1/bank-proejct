import { GetAllUsers } from '@/actions/users/getAllUsers';
import { getProfile } from '@/actions/getProfile';
import { baseUrl } from '@/actions/config';
import ViewAllUsersComponent from '@/components/Users/UsersTable';

const ViewAllUsers = async () => {
  const users = await GetAllUsers();
  const profile = await getProfile();

  return (
    <div className="flex justify-center mt-7 w-full md:w-3/4 p-6 rounded-lg shadow-lg bg-background text-foreground">
      <ViewAllUsersComponent
        users={users}
        profile={profile}
        baseUrl={baseUrl}
      />
    </div>
  );
};

export default ViewAllUsers;
