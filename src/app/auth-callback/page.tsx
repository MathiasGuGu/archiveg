import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { Loader2 } from "lucide-react";
import React from "react";
const prisma = new PrismaClient();

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  console.log(user);

  if (!user) {
    console.error("No User To Proccess");
    redirect("/");
  }

  const userInDb = await prisma.users.findFirst({
    where: {
      email: user.email,
    },
  });

  if (!userInDb) {
    await prisma.users.create({
      data: {
        userId: user.id,
        email: user.email,
        name: user.given_name,
      },
    });
    redirect("/");
  } else {
    redirect("/");
  }

  return (
    <div className="w-full h-screen flex flex-col gap-3 items-center justify-center">
      <Loader2 className=" animate-spin" />
      <p className="text-sm">Loading...</p>
      <p className="text-sm">Do not leave this page</p>
    </div>
  );
};

export default page;
