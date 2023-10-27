import React from "react";
import {
  RegisterLink,
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarUserMenu from "./NavbarUserMenu";
import Link from "next/link";
import { Package } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <div className="flex items-center z-50 bg-white justify-center h-14 w-full fixed top-0 left-0">
      <MobileNavbar user={user}></MobileNavbar>

      <div className=" max-w-[90rem] md:flex w-full h-full items-center justify-evenly hidden">
        <h1 className="text-xl flex gap-1 items-center justify-center font-bold text-blue-950">
          <Package size={24} strokeWidth={2} />
          archiveg
        </h1>

        <div className="flex gap-5  text-sm text-blue-950 ">
          <Link className=" rounded hover:bg-blue-950/5 px-3 py-1" href="/">
            Home
          </Link>
          <Link href="/feed" className=" rounded hover:bg-blue-950/5 px-3 py-1">
            Feed
          </Link>
          {user && (
            <Link
              href="/post/add"
              className=" rounded hover:bg-blue-950/5 px-3 py-1"
            >
              Add post
            </Link>
          )}
        </div>
        <div className="flex gap-4 items-center">
          {!user ? (
            <div className="flex gap-3 items-center">
              <LoginLink className=" px-4 py-1 hover:underline ">
                Sign in
              </LoginLink>
              <RegisterLink className=" px-4 py-1 bg-blue-700 text-blue-50 rounded hover:scale-[1.02] duration-150 ">
                Sign up
              </RegisterLink>
            </div>
          ) : (
            <NavbarUserMenu user={user}>
              <div className="flex gap-3 items-center">
                <LoginLink className=" px-4 py-1 hover:underline ">
                  Sign in
                </LoginLink>
                <RegisterLink className=" px-4 py-1 bg-blue-700 text-blue-50 rounded hover:scale-[1.02] duration-150 ">
                  Sign up
                </RegisterLink>
              </div>
            </NavbarUserMenu>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
