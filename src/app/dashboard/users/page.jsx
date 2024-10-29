import { GetAllUsers } from '@/actions/users/getAllUsers';
import UserCards from '@/components/Users/UserCards';
import { getProfile } from '@/actions/getProfile';

const ViewAllUsers = async () => {
  const users = await GetAllUsers();
  const profile = await getProfile();

  return (
    <div className="flex flex-wrap p-6 gap-8 justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* <div className="flex w-full max-w-sm items-center space-x-2 ">
          <Input type="text" placeholder="Search username" />
        </div> */}
      </div>
      <UserCards users={users} profile={profile} />
    </div>
  );
};

export default ViewAllUsers;
