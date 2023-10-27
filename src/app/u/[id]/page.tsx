import { cn } from "@/lib/utils";
import { AppWindow, Camera, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Account from "@/components/profile/Account";
import AppSettings from "@/components/profile/AppSettings";
import Archive from "@/components/profile/Archive";
import Navigation from "@/components/profile/Navigation";
import useUser from "@/hooks/useUser";
const page = (context) => {
  console.log(context);
  const user = useUser();

  return (
    <div className="mt-14 flex flex-col w-full h-auto">
      <div className="w-full h-64 bg-gradient-to-tr from-purple-600 to-pink-600/50 relative">
        <div className="w-full h-full relative group hover:cursor-pointer">
          <Camera
            className="absolute right-12 top-8 hidden group-hover:flex text-white"
            size={32}
            strokeWidth={1}
          ></Camera>
        </div>
        <div className="w-28 h-28 border-2 border-white rounded-full bg-gradient-to-br group from-blue-500 to-blue-700 absolute -bottom-10 left-48">
          <div className=" w-full h-full  group-hover:flex  group-hover:items-center  group-hover:justify-center hidden  group-hover:cursor-pointer">
            <Camera className=" text-white" size={32} strokeWidth={1}></Camera>
          </div>
        </div>
      </div>
      <div className="mt-14  px-36 font-bold">
        <div className="flex flex-col">
          <p>
            {user?.given_name} {user?.family_name}
          </p>
          <p className="text-sm font-light text-zinc-400">{user?.email}</p>
        </div>
      </div>
      <Navigation user={user} context={context} />
    </div>
  );
};

export default page;
