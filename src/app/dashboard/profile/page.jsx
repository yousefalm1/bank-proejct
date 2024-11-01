import { baseUrl } from '@/actions/config';
import { getProfile } from '@/actions/getProfile';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const ViewProfile = async () => {
  const profile = await getProfile();

  return (
    <div className="flex flex-col items-center mt-28 p-5 bg-background rounded-lg shadow-lg w-3/4 max-w-sm ">
      <Avatar className="w-48 h-48 p-3">
        <AvatarImage
          src={`${baseUrl}/${profile.image}`}
          className="object-cover w-full h-full rounded-full"
        />
      </Avatar>
      <h1 className="text-3xl font-bold mb-2 p-2">{profile.username}</h1>
      <h2 className="text-2xl text-gray-600 mb-4 p-2">
        Balance: {profile.balance}
      </h2>
      <div className="grid w-full max-w-xs items-center gap-1.5">
        <Label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Picture
        </Label>
        <input
          id="picture"
          type="file"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium"
        />
        <div></div>
        <Button className="flex justify-center items-center  border    ">
          Save
        </Button>
      </div>
    </div>
  );
};

export default ViewProfile;
