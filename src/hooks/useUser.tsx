"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const useUser = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = getUser();
  return user;
};

export default useUser;
