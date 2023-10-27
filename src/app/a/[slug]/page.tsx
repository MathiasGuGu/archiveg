import Image from "next/image";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FileEdit } from "lucide-react";
import MarkdownParser from "@/components/MarkdownParser";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import DeleteBtn from "@/components/DeleteBtn";
const Page = async (context) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  const id = context.params.slug;
  const getData = async () => {
    const req = await fetchData(id);
    const data = await req.json();
    return data;
  };
  const post = await getData();

  let userOwnsPost;
  if (user) {
    userOwnsPost = post.authorEmail === user.email;
  } else {
    userOwnsPost = false;
  }

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center mt-32 mb-32 gap-12">
      <>
        {" "}
        <div className=" w-full max-w-4xl px-3 md:px-0">
          {post?.image ? (
            <div className="w-full h-96 relative">
              <Image
                fill
                src={post?.image}
                alt="something"
                className="rounded rounded-t-3xl object-cover"
              ></Image>
            </div>
          ) : null}
        </div>
        <div className="text-4xl w-full max-w-4xl px-4 md:px-0">
          <div className="flex gap-6 items-center justify-between mb-6 bg-zinc-100 px-4 py-4 rounded-xl">
            <div className="flex gap-5">
              <div className="h-8 w-8 rounded-full bg-blue-900"></div>
              <p className="text-sm">
                {post?.author ? (
                  <div className="flex flex-col ">
                    <p className="text-xs">Written by</p>
                    <p className=" font-bold"> {post?.author}</p>
                  </div>
                ) : (
                  <Skeleton />
                )}
              </p>
            </div>
          </div>
          <h1 className="text-left text-3xl  md:font-bold text-blue-950">
            {post?.title || <Skeleton />}
          </h1>

          <p className="text-sm text-zinc-500  text-left">
            {post?.createdAt ? (
              new Date(post?.createdAt).toLocaleDateString()
            ) : (
              <Skeleton></Skeleton>
            )}
          </p>
        </div>
        <div className="w-full max-w-4xl whitespace-pre-wrap px-3 ">
          {post?.body ? (
            <MarkdownParser bodyText={post.body}></MarkdownParser>
          ) : (
            <Skeleton count={5} height={100} />
          )}
        </div>
      </>
      {userOwnsPost ? (
        <DeleteBtn callbackRoute={"/feed"} id={id}>
          <div className="text-red-500 px-6 py-2 bg-red-500/20 w-fit">
            Delete
          </div>
        </DeleteBtn>
      ) : null}
    </div>
  );
};

export default Page;

const fetchData = async (id: string | null) => {
  const post = await fetch("http://localhost:3000/api/getpost", {
    method: "POST",
    body: JSON.stringify({
      id,
    }),
  });
  return post;
};
