import Logo from '@/app/assets/logo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Label } from '../ui/label';

const UsersCreditCard = ({ user }) => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      <div>
        <Link href="/dashboard/profile">
          <div className="space-y-20">
            <div className="relative m-auto rounded-2xl bg-background shadow-2xl text-foreground transition-transform sm:h-72 sm:w-[32rem] sm:hover:scale-105 hidden md:block">
              <div className="absolute top-6 w-full px-12 sm:top-10">
                <div className="flex justify-between">
                  <div>
                    <p className="font-light text-lg">Name</p>
                    <p className="font-semibold tracking-wider text-xl">
                      {user.username}
                    </p>
                  </div>

                  <Image
                    className="h-20 w-20 object-contain rounded-full"
                    src={Logo}
                    alt="Logo"
                    width={0}
                    height={0}
                  />
                </div>
                <div className="pt-2">
                  <p className="font-light text-lg">Card Number</p>
                  <p className="tracking-widest font-semibold text-lg">
                    **** **** **** ****
                  </p>
                </div>
                <div className="pt-6 pr-8 sm:pt-8">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm font-light">Valid From</p>
                      <p className="text-lg font-semibold tracking-widest">
                        11/15
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-light">Expiry</p>
                      <p className="text-lg font-semibold tracking-widest">
                        03/25
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-light">CVV</p>
                      <p className="tracking-wider text-lg font-bold">521</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UsersCreditCard;
