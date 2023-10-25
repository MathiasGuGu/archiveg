import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const deUrl = req.url?.split("?")[1];
  const query = deUrl?.split("&");
  const date = query[0].split("=")[1];
  const tags = query[1].split("=")[1];
  const likes = query[2].split("=")[1];

  const data = await prisma.post.findMany({
    orderBy: {
      createdAt: date == "old" ? "asc" : "desc",
    },
    include: {
      user: true,
    },
  });
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const request = await req.json();
  const { image, title, body, tags } = request;

  // map through tags in body

  tags.forEach(async (tag) => {
    const check = tag.toLowerCase();
    console.log(check);
    const DbTag = await prisma.tags.findFirst({
      where: {
        title: tag,
      },
    });

    const tagInDb = DbTag !== null;

    if (tagInDb) {
      await prisma.tags.update({
        where: {
          title: tag,
        },
        data: {
          count: { increment: 1 },
        },
      });
    } else {
      await prisma.tags.create({
        data: {
          title: tag,
          count: 1,
        },
      });
    }
  });

  if (!user) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "User is not authenticated",
        data: { message: "failed" },
      }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }

  await prisma.post.create({
    data: {
      title,
      body,
      slug: "something",
      image,
      author: user?.given_name,
      authorEmail: user?.email,
      tags,
    },
  });

  return new NextResponse(
    JSON.stringify({
      success: true,
      message: "Connection establised",
      data: { message: "success" },
    }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
  await prisma.post.update({
    where: {
      slug: "lorem",
    },

    data: {
      comments: {
        createMany: {
          data: [
            { comment: "Great post!" },

            { comment: "Can't wait to read more!" },
          ],
        },
      },
    },
  });

  const posts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  });
  return new NextResponse(
    JSON.stringify({
      success: true,
      message: "Connection establised",
      data: posts,
    }),
    { status: 200, headers: { "content-type": "application/json" } }
  );
}

export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 5;