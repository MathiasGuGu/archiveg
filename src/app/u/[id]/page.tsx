import { AppWindow, Camera, Settings, User } from "lucide-react";
import Archive from "@/components/profile/Archive";
import Navigation from "@/components/profile/Navigation";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import { absoluteUrl } from "@/lib/utils";
const Page = async (context: any) => {
  const user = await useUser();
  const request = await fetch(
    absoluteUrl(
      `/api/user/getSingleUser?id=${context.params?.id}&includePosts=true`
    ),
    { method: "GET" }
  );
  const { data, posts } = await request.json();
  const { banner, avatar, name, email, userId } = data;
  let isLoggedInUser = false;
  if (!user) {
    isLoggedInUser = false;
  } else {
    isLoggedInUser = user?.id === userId;
  }
  return (
    <div className="mt-14 flex flex-col w-full h-auto">
      <div className="w-full h-64 bg-gradient-to-tr from-purple-600 to-pink-600/50 relative">
        <div className="w-full h-full relative group hover:cursor-pointer">
          <Image
            alt="User avatar"
            fill
            src={banner}
            className=" w-full h-full object-cover   group-hover:flex  group-hover:items-center  group-hover:justify-center   group-hover:cursor-pointer"
          ></Image>
          <Camera
            className="absolute right-12 top-8 hidden group-hover:flex text-white"
            size={32}
            strokeWidth={1}
          ></Camera>
        </div>
        <div className="w-28 h-28 border-2  border-white rounded-full bg-gradient-to-br group from-blue-500 to-blue-700 absolute md:-bottom-10 md:left-48 -bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-full h-full rounded-full">
            <Image
              alt="User avatar"
              fill
              src={avatar}
              className=" w-full h-full rounded-full object-cover  group-hover:flex  group-hover:items-center  group-hover:justify-center   group-hover:cursor-pointer"
            ></Image>
          </div>
        </div>
      </div>
      <div className="mt-14  md:px-36 font-bold md:w-auto flex items-center md:items-start md:justify-start justify-center w-full ">
        <div className="flex flex-col">
          <p>{name}</p>
          <p className="text-sm font-light text-zinc-400">{email}</p>
        </div>
      </div>
      {isLoggedInUser ? (
        <Navigation user={user} posts={posts} data={data} context={context} />
      ) : (
        <Archive user={user} posts={posts} data={data} />
      )}
    </div>
  );
};

export default Page;
