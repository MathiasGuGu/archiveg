"use client";

import { LogOut, Package, Settings, User2, Heart } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
const NavbarUserMenu = ({ user }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const [isMenuAdmin, setIsMenuAdmin] = useState<Boolean>(false);
  console.log(user);
  return (
    <div className="relative flex items-center  gap-5">
      <div>
        <p className="text-xs  text-zinc-600">{user.given_name}</p>
      </div>
      <div
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
        className="h-11 aspect-square bg-blue-950 rounded-full relative shadow hover:cursor-pointer duration-100"
      ></div>
      {isMenuOpen && (
        <div className="absolute shadow-xl border-t h-auto w-56 rounded-xl bg-white px-4 py-5  top-14 left-1/2 -translate-x-1/2 flex flex-col gap-12">
          <ul className="flex flex-col gap-3 text-sm underline">
            <Link
              href={`/u/${user.id}/articles`}
              className="flex gap-4 items-center  py-2 px-2 rounded hover:bg-slate-50 hover:cursor-pointer"
            >
              <Package size={16} strokeWidth={1} />
              Archive
            </Link>
            <li className="flex gap-4 items-center  py-2 px-2 rounded  hover:bg-slate-50 hover:cursor-pointer">
              <Heart size={16} strokeWidth={1} />
              Followed Users
            </li>

            <Link
              href={`/u/${user.id}/account`}
              className="flex gap-4 items-center  py-2 px-2 rounded  hover:bg-slate-50 hover:cursor-pointer"
            >
              <User2 size={16} strokeWidth={1} />
              Account
            </Link>
            <li className="flex gap-4 items-center  py-2 px-2 rounded  hover:bg-slate-50 hover:cursor-pointer">
              <Settings size={16} strokeWidth={1} />
              Settings
            </li>
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
