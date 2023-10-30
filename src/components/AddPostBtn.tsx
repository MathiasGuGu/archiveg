import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
const AddPostBtn = () => {
  return (
    <Link
      href="/post/add"
      className="fixed bottom-12 z-50 right-12 w-14 h-14 rounded-full bg-white shadow-xl border-t flex items-center justify-center hover:cursor-pointer hover:scale-105 duration-100"
    >
      <Plus size={20} strokeWidth={2} color="blue" />
    </Link>
  );
};

export default AddPostBtn;
