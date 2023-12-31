import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { useRouter } from "next/navigation";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
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
    // @ts-ignore: Unreachable code error
    data: data ,
    headers: { "content-type": "application/json" },
  });
}

export async function DELETE(req: NextRequest, res: NextResponse) {
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

export async function GET(req: NextRequest, res: NextResponse) {
  const email = req.url?.split("?")[1].split("=")[1]
  const data = await prisma.post.findMany({
    where: {
      authorEmail: email
    },
  });

  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}