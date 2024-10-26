import { login } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-7">
      <div className="">
        <h1 className="font-bold text-center text-2xl mb-6">Login Form</h1>

        <form action={login}>
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
              name="password"
              required
              placeholder="Enter Password"
            />
          </div>

          <div>
            <Button type="submit"> Submit </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
