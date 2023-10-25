import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const body = await req.json();
  const data = await prisma.post.findFirst({
    include: {
      user: true,
    },
    where: {
      id: body.id,
    },
  });

  return new NextResponse(JSON.stringify(data), {
    status: 200,
    data,
    headers: { "content-type": "application/json" },
  });
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  const body = await req.json();
  const data = await prisma.post.delete({
    where: {
      id: body.id,
    },
  });

  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
