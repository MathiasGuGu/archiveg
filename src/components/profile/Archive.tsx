import useArchive from "@/hooks/useArchive";
import { Delete, Edit, FileQuestion, Settings, X } from "lucide-react";
import React from "react";
import ArchivePost from "../archive/ArchivePost";

const Archive = ({ user, data, posts }) => {
  return (
    <div className="w-full h-auto gap-2 md:px-16   py-4 flex  flex-wrap  justify-center">
      {posts?.map((post, index) => {
        return (
          <ArchivePost
            key={post.id}
            post={post}
            user={user}
            data={data}
          ></ArchivePost>
        );
      })}
    </div>
  );
};

export default Archive;
