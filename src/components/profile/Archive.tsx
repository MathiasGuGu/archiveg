import useArchive from "@/hooks/useArchive";
import { Delete, Edit, FileQuestion, Settings, X } from "lucide-react";
import React from "react";
import ArchivePost from "../archive/ArchivePost";

const Archive = ({ user }) => {
  const posts = useArchive(user.email);
  return (
    <div className="w-full h-auto gap-2  flex flex-col justify-center">
      {posts?.map((post, index) => {
        return <ArchivePost post={post}></ArchivePost>;
      })}
    </div>
  );
};

export default Archive;
