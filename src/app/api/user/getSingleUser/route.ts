import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, res: NextApiResponse) {


    const id = req.nextUrl.searchParams.get("id")
    const includePosts = req.nextUrl.searchParams.get("includePosts")


    if (!id) {
        toast.error("User not found")
        redirect("/")
    }
    const data = await  prisma.users.findFirst({
        where: {
            userId: id
        },
    
        
    })

    if (!includePosts){  
        return new NextResponse(JSON.stringify(data), {
        status: 200,
        headers: { "content-type": "application/json" },
    })}
    const posts = await prisma.post.findMany({ where: { authorId: id } })
     
    return new NextResponse(JSON.stringify({data, posts}), {
      status: 200,

      headers: { "content-type": "application/json" },
    });
}