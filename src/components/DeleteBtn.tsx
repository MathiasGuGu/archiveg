"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DeleteBtn = ({ id, children, callbackRoute }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteInProgress, setDeleteInProgress] = useState();
  return (
    <>
      {isDeleting ? (
        <div className="fixed z-50 top-1/2 -translate-y-1/2 bg-white   h-auto border shadow-xl px-10 py-12  flex flex-col gap-4">
          <h2 className="text-lg   text-center">
            Are you sure you want to delete this post?
          </h2>
          <p className="text-center font-light ">
            This action can not be un-done
          </p>
          <div className="w-full flex items-center justify-center gap-6 mt-12">
            <div
              onClick={async () => {
                await deletePost(id);
                router.push(callbackRoute);
              }}
              className="px-3 py-1  text-red-500 rounded hover:bg-red-400/20  hover:cursor-pointer"
            >
              Yes, Delete my post
            </div>
            <div
              onClick={() => {
                setIsDeleting(false);
              }}
              className="px-3 py-1 bg-blue-600 hover:cursor-pointer hover:scale-[1.02] duration-200  text-blue-50 rounded"
            >
              No, take me back
            </div>
          </div>
        </div>
      ) : (
        <div onClick={() => setIsDeleting(true)} className="w-full h-full">
          {children}
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
