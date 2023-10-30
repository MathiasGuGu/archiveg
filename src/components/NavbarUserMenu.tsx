"use client";

import { LogOut, Package, Settings, User2, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const NavbarUserMenu = ({ user, data }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const [isMenuAdmin, setIsMenuAdmin] = useState<Boolean>(false);
  return (
    <div className="relative flex items-center  gap-5">
      <div>
        <p className="text-xs  text-zinc-600">{data?.name}</p>
      </div>
      <div
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
        className="h-11 aspect-square relative bg-blue-950 rounded-full  shadow hover:cursor-pointer duration-100"
      >
        <Image
          alt="avatar"
          fill
          className="rounded-full object-cover"
          src={data?.avatar}
        ></Image>
      </div>
      {isMenuOpen && (
        <div className="absolute shadow-xl border-t h-auto w-80 rounded bg-white px-4 py-5  top-14 left-1/2 -translate-x-1/2 flex flex-col gap-12">
          <ul className="flex flex-col gap-3 text-sm ">
            <Link
              href={`/u/${user?.id}?s=archive`}
              className="flex flex-col  justify-center  py-2  rounded hover:bg-slate-50 hover:cursor-pointer"
            >
              <div className="flex px-2 gap-4">
                <Package size={16} strokeWidth={1} />
                Archive
              </div>
              <p className="text-xs text-zinc-500 px-10">
                {" "}
                All of your articles
              </p>
            </Link>
            <div className="w-full h-[1px] bg-blue-950/20"></div>

            <Link
              href={`/u/${user?.id}?s=account`}
              className="flex flex-col justify-center  py-2  rounded hover:bg-slate-50 hover:cursor-pointer"
            >
              <div className="flex px-2 gap-4">
                <User2 size={16} strokeWidth={1} />
                Account
              </div>
              <p className="text-xs text-zinc-500 px-10">
                {" "}
                You account settings
              </p>
            </Link>
            <Link
              href={`/u/${user?.id}?s=settings`}
              className="flex flex-col justify-center  py-2  rounded hover:bg-slate-50 hover:cursor-pointer"
            >
              <div className="flex px-2 gap-4">
                <Settings size={16} strokeWidth={1} />
                Settings
              </div>
              <p className="text-xs text-zinc-500 px-10">
                {" "}
                You application settings
              </p>
            </Link>
          </ul>
          <Link href="/api/auth/logout" className="self-end">
            <LogOut
              className="border border-red-500 rounded py-2 px-2 w-10  h-10  hover:bg-red-50 duration-150 hover:cursor-pointer"
              strokeWidth={1}
              color="rgb(239 68 68)"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarUserMenu;
