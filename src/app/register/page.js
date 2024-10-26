import { register } from '@/actions/auth/register';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  return (
    <div className="flex justify-center items-center mt-7">
      <div className="">
        <h1 className="font-bold text-center text-2xl mb-6">Register Form</h1>

        <form action={register}>
          <div className="mb-6">
            <Input
              type="text"
              name="username"
              required
              placeholder="Enter username"
            />
          </div>

          <div className="mb-6">
            <Input
              type="password"
              name="passwords"
              required
              placeholder="Enter Password"
            />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mb-6">
            <Label htmlFor="picture">Profile Image</Label>
            <Input type="file" required name="image" />
          </div>

          <div>
            <Button type="submit"> Submit </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
