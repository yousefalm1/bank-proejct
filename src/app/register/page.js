import { register } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/logo.jpg';

const Register = () => {
  return (
    <div className="max-w-lg mx-auto mt-52  ">
      <div className="flex flex-col justify-center items-center">
        <div>
          <Image
            src={Logo}
            alt="logo"
            width={0}
            height={0}
            className="rounded-3xl w-20 h-20 object-cover"
          />
        </div>
        <h1 className="text-4xl font-medium text-center mt-10">
          Join Masraf Today{' '}
        </h1>
        <p className="text-gray-400 text-base text-center mt-2">
          Already with us?{' '}
          <Link href="/login">
            <span className="text-foreground font-base hover:border-b hover:border-foreground">
              Let&apos;s login
            </span>
          </Link>
        </p>

        <form action={register} className=" mt-4 space-y-4">
          <Input
            type="text"
            name="username"
            required
            placeholder="Enter username"
            className="w-full sm:w-[380px] md:w-[400px] lg:w-[450px] rounded-2xl py-6 mt-5"
          />
          <Input
            type="password"
            name="password"
            required
            placeholder="Enter Password"
            className="w-full sm:w-[380px] md:w-[400px] lg:w-[450px] rounded-2xl py-6 mt-5"
          />
          <Input
            type="file"
            name="image"
            required
            className="w-full sm:w-[380px] md:w-[400px] lg:w-[450px] rounded-2xl py-6 mt-5"
            placeholder="Choose a profile image"
          />
          <Button
            type="submit"
            className="w-full sm:w-[380px] md:w-[400px] lg:w-[450px] rounded-2xl text-base py-6 font-medium mt-8"
          >
            Sign in
          </Button>
        </form>

        <h1 className="text-center text-xs text-muted-foreground w-96 mt-5">
          You acknowledge that you have read, and agree to our
          <Link
            href="/"
            className="hover:border-b hover:border-muted-foreground inline-block mx-1"
          >
            Terms of Service
          </Link>
          and our
          <Link
            href="/"
            className="hover:border-b hover:border-muted-foreground inline-block ml-1"
          >
            Privacy Policy
          </Link>
          .
        </h1>
      </div>
    </div>
  );
};

export default Register;
