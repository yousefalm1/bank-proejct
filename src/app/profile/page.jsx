import { getProfile } from '@/actions/getProfile';

const ViewProfile = async () => {
  const profile = await getProfile();
  return (
    <div className="flex justify-center mt-7">
      <h1 className="text-6xl">{profile.username}</h1>
    </div>
  );
};

export default ViewProfile;
