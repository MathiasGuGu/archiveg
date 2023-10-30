"use client";
import { Edit, FileQuestion, Settings, X } from "lucide-react";
import React, { useState } from "react";
import DeleteBtn from "../DeleteBtn";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import Link from "next/link";

const ArchivePost = ({ post, user, data }) => {
  const isLoggedInUser = user.id === data.userId;
  return (
    <>
      {isLoggedInUser ? (
        <SmallArchivePost post={post} user={user} data={data} />
      ) : (
        <BigArchivePost post={post} user={user} data={data} />
      )}
    </>
  );
};

export const BigArchivePost = ({ post, user, data }) => {
  return (
    <Link
      href={`/a/${post.id}`}
      className="flex flex-col gap-3 mt-24 hover:outline outline-1  flex-grow min-w-[100px]  max-w-[400px] h-auto p-2 shadow-lg shadow-primary/5 rounded-lg "
    >
      <div className="w-full  h-[200px] relative bg-gradient-to-tr from-blue-800 to-primary rounded-xl">
        <Image
          fill
          alt="post image"
          className="rounded-xl object-cover"
          src={post?.image}
        ></Image>
      </div>
      <div className="flex flex-col px-3">
        <h1 className=" text-2xl font-bold text-primary truncate">
          {post?.title}
        </h1>
        <div className="h-[200px] w-[300px] overflow-hidden whitespace-pre-line ">
          {post?.body}
        </div>
      </div>
    </Link>
  );
};

export const SmallArchivePost = ({ post, user, data }) => {
  const isLoggedInUser = user.id === data.userId;
  const [postSettingsOpen, setPostSettingsOpen] = useState(false);
  return (
    <div className="w-full flex rounded border items-center justify-between border-primary px-12">
      <div>{post?.title}</div>

      <div className="relative flex items-center   py-2">
        {isLoggedInUser && (
          <>
            <Settings
              onClick={() => setPostSettingsOpen((prev) => !prev)}
              className="hover:bg-blue-950/5 p-2 w-10 h-10 rounded"
              strokeWidth={1}
              size={24}
            />
            {postSettingsOpen && (
              <div className="w-48 h-auto z-40 bg-white rounded shadow absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col gap-2 justify-between p-2">
                <div className="h-8 flex items-center gap-3 hover:cursor-pointer hover:bg-blue-950/5 pl-2">
                  <Edit strokeWidth={1} size={16}></Edit>Edit Post
                </div>
                <div className="h-8 flex items-center gap-3 hover:cursor-pointer hover:bg-blue-950/5 pl-2">
                  <FileQuestion strokeWidth={1} size={16}></FileQuestion>Hide
                  Post
                </div>
                <DeleteBtn callbackRoute={"?s=settings"} id={post?.id}>
                  <div className="h-8 flex items-center gap-3 hover:cursor-pointer hover:bg-blue-950/5 pl-2 text-red-500">
                    <X strokeWidth={1} size={16}></X>Delete Post
                  </div>
                </DeleteBtn>
              </div>
            )}
          </>
        )}
      </div>
      {postSettingsOpen && (
        <div
          onClick={() => setPostSettingsOpen(false)}
          className="h-screen w-screen  fixed top-0 left-0"
        ></div>
      )}
    </div>
  );
};

export default ArchivePost;
