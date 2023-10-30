import NavbarUserMenu from "./NavbarUserMenu";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { Package } from "lucide-react";
import useUser from "@/hooks/useUser";
import { absoluteUrl } from "@/lib/utils";

const Navbar = async () => {
  const user = await useUser();
  const request = await fetch(
    absoluteUrl(
      "/api/user/getSingleUser?id=" + user?.id + "&includePosts=false"
    ),
    { method: "GET" }
  );
  const { data } = await request.json();
  const avatar = data?.avatar;

  return (
    <div className="flex items-center z-50 bg-white justify-center h-14 w-full fixed top-0 left-0">
      <MobileNavbar user={user}></MobileNavbar>

      <div className=" max-w-[90rem] md:flex w-full h-full items-center justify-evenly hidden">
        <h1 className="text-xl flex gap-1 items-center justify-center font-semibold text-primary">
          <Package size={27} strokeWidth={1} />
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

        <NavbarUserMenu
          avatar={avatar}
          user={user}
          data={data}
        ></NavbarUserMenu>
      </div>
    </div>
  );
};

export default Navbar;
