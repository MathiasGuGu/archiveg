"use client";
import { Edit, FileQuestion, Settings, X } from "lucide-react";
import React, { useState } from "react";
import DeleteBtn from "../DeleteBtn";

const ArchivePost = ({ post }) => {
  const [postSettingsOpen, setPostSettingsOpen] = useState(false);
  return (
    <div className="w-full h-16 text-sm  rounded flex px-12 items-center justify-between bg-zinc-100 hover:cursor-pointer  duration-200">
      <h2>{post.title}</h2>
      <div className="relative">
        <Settings
          onClick={() => setPostSettingsOpen((prev) => !prev)}
          className="hover:bg-blue-950/5 p-2 w-10 h-10 rounded"
          strokeWidth={1}
          size={24}
        />
        {postSettingsOpen && (
          <div className="w-48 h-auto z-40 bg-white rounded shadow absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col gap-2 justify-between p-2">
            <div className="h-8 flex items-center gap-3 hover:bg-blue-950/5 pl-2">
              <Edit strokeWidth={1} size={16}></Edit>Edit Post
            </div>
            <div className="h-8 flex items-center gap-3 hover:bg-blue-950/5 pl-2">
              <FileQuestion strokeWidth={1} size={16}></FileQuestion>Hide Post
            </div>
            <DeleteBtn callbackRoute={"?s=settings"} id={post.id}>
              <div className="h-8 flex items-center gap-3 hover:bg-blue-950/5 pl-2 text-red-500">
                <X strokeWidth={1} size={16}></X>Delete Post
              </div>
            </DeleteBtn>
          </div>
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
