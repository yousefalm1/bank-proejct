import { GetAllUsers } from "@/actions/users/getAllUsers";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { baseUrl } from "@/actions/config";
import { Button } from "@/components/ui/button";

const ViewAllUsers = async () => {
  const users = await GetAllUsers();

  return (
    <div className="flex flex-wrap p-2 m-2">
      {users.map((user) => (
        <div key={user._id} className="m-4">
          <div className="flex items-center p-3 w-72 h-28 bg-card rounded-md shadow-lg">
            <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-mdto-r  hover:cursor-pointer hover:scale-110 duration-300">
              <Avatar>
                <AvatarImage src={`${baseUrl}/${user.image}`} alt="Avatar" />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            </section>

            <section className="block border-l border-background m-3">
              <div className="pl-3">
                <h3 className="bg-clip-text text-transparent bg-gradient-to-l from-[#969ea8] to-[#3a3a3e] text-lg font-bold">
                  {user.username}
                </h3>
                <h3 className="text-gray-600 font-semibold text-sm">
                  {user.balance} KD
                </h3>
                <Button variant="outline" className="text-sm">
                  Transfer
                </Button>
              </div>
              <div className="flex gap-3 pt-2 pl-3"></div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewAllUsers;
