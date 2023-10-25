import { NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextApiResponse } from "next";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequestest, res: NextApiResponse) {
  const data = await prisma.tags.findMany({
    orderBy: {
      count: "desc",
    },
  });
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
