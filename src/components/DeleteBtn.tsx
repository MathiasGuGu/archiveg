"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DeleteBtn = ({ id }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState();
  return (
    <>
      {isDeleting ? (
        <div className="fixed z-50 top-1/2 -translate-y-1/2 bg-white outline-dashed outline-1  h-auto shadow px-12 py-24  flex flex-col gap-4">
          <h2 className="text-2xl font-bold   text-center">
            Are you sure you want to delete this post?
          </h2>
          <p className="text-center ">This action can not be un-done</p>
          <div className="w-full flex items-center justify-center gap-6 mt-12">
            <div
              onClick={async () => {
                await deletePost(id);
                router.push("/feed");
              }}
              className="px-4 py-2 border-2 border-red-700 text-red-70 rounded hover:bg-red-700 hover:text-red-50 hover:cursor-pointer"
            >
              Yes, Delete my post
            </div>
            <div
              onClick={() => {
                setIsDeleting(false);
              }}
              className="px-4 py-2 bg-blue-700 hover:cursor-pointer hover:scale-[1.02]  text-blue-50 rounded"
            >
              No, take me back
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsDeleting(true)}
          className="px-3 py-2 outline outline-2 outline-red-400 rounded hover:bg-red-400 hover:text-red-950 fixed bottom-14 left-12 hover:cursor-pointer text-sm"
        >
          Delete Post
        </div>
      )}
    </>
  );
};

export default DeleteBtn;

const deletePost = async (id: string | null) => {
  const post = await fetch("http://localhost:3000/api/getpost", {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
  });
  toast.error("Post has been deleted");

  return post;
};
