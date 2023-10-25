import React from "react";
import {
  RegisterLink,
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarUserMenu from "./NavbarUserMenu";
import Link from "next/link";
import { Package } from "lucide-react";
const Navbar = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <div className="flex items-center z-50 bg-white justify-center h-14 w-full fixed top-0 left-0">
      <div className=" max-w-[90rem] flex w-full h-full items-center justify-evenly ">
        <h1 className="text-xl flex gap-1 items-center justify-center font-bold text-blue-950">
          <Package size={24} strokeWidth={2} />
          archiveg
        </h1>

        <div className="flex gap-5  text-sm text-blue-950">
          <Link className=" rounded hover:bg-blue-950/5 px-3 py-1" href="/">
            Home
          </Link>
          <Link href="/feed" className=" rounded hover:bg-blue-950/5 px-3 py-1">
            Feed
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          {!user ? (
            <div>
              <LoginLink className="border-2 border-zinc-900 px-4 py-1  hover:bg-zinc-100 ">
                Sign in
              </LoginLink>
              <RegisterLink className="border-2 px-4 py-1 border-zinc-900 bg-zinc-900 text-zinc-50">
                Sign up
              </RegisterLink>
            </div>
          ) : (
            <NavbarUserMenu user={user}></NavbarUserMenu>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
