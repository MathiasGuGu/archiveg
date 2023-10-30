"use client";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Package } from "lucide-react";
import React, { useState } from "react";
import NavbarUserMenu from "./NavbarUserMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const MobileNavbar = ({ user, avatar, children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex md:hidden relative w-full h-full items-center justify-between px-4">
      <h1 className="text-xl flex gap-1 items-center justify-center font-bold text-blue-950">
        archiveg
      </h1>
      <div className="flex gap-6 items-center justify-center">
        <div className="flex gap-4 items-center">
          {!user ? (
            <>{children}</>
          ) : (
            <NavbarUserMenu avatar={avatar} user={user}></NavbarUserMenu>
          )}
        </div>
        <div
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="bg-primary text-blue-50 rounded-full h-fit w-fit px-5 py-2 text-sm hover:cursor-pointer "
        >
          Menu
        </div>
      </div>
      <div
        className={cn({
          "w-2/3 h-full fixed top-14 duration-200 flex bg-white": true,
          "right-0 ": isSidebarOpen,
          "right-0 translate-x-[100vw] ": !isSidebarOpen,
        })}
      >
        <ul className="w-full h-full flex flex-col px-6 py-12 gap-7">
          <Link href={"/"} className=" border-b  px-2 rounded py-1 ">
            <div className="font-bold text-primary">Home</div>
            <p className="text-sm text-zinc-500">Welcome to the homepage</p>
          </Link>
          <Link href={"/feed"} className=" border-b px-2 rounded py-1 ">
            <div className="font-bold text-primary">Feed</div>
            <p className="text-sm text-zinc-500">
              View all your favourite posts
            </p>
          </Link>
          <Link href={"/post/add"} className=" px-2 rounded py-1 ">
            <div className="font-bold text-primary">Add Post</div>
            <p className="text-sm text-zinc-500">In the mood for writing?</p>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
