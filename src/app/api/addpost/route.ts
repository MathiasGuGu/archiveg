import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextResponse) {

  const data = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc"
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

export async function POST(req: NextRequest, res: NextResponse) {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const request = await req.json();
  const { image, title, body, tags, id } = request;

  // map through tags in body

  tags.forEach(async (tag: any) => {
    const check = tag.toLowerCase();
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
      author: user.given_name || "" ,
      authorId: id,
      authorEmail: user?.email || "",
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

export async function PUT(req: NextRequest, res: NextResponse) {
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
