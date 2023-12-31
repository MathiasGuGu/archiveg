import React from "react";
import ArchivePost from "../archive/ArchivePost";

const Archive = ({ user, data, posts }: any) => {
  return (
    <div className="w-full h-auto gap-2 md:px-16   py-4 flex  flex-wrap  justify-center md:justify-start">
      {posts?.map((post: any, index: Number) => {
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
