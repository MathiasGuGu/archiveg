import useUser from "@/hooks/useUser";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Editor from "./Editor";

const Page = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();
  const isAuth = isAuthenticated();
  return (
    <div className="w-full h-auto flex items-center justify-center relative">
      <Editor user={user} isAuthenticated={isAuth} />
    </div>
  );
};

export default Page;
